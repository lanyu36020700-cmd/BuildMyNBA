// ============================================================
// economy-core.js —— 经济逻辑（阶段 A：从 __ai_app.html 外置）
// 薪资档位/报价/工资帽/球队薪资总额/奖金/结算/金额格式化。
// 只依赖 game-config.js(SIM_CONFIG) 与 era-economics.js(时代分支)，均为调用时引用。
// ============================================================


function getEconCfg() {
  return (SIM_CONFIG && SIM_CONFIG.SIM_ECONOMY) || {};
}


function ensureEconomyState() {
  var c = STATE.career || {};
  if (c.money == null) c.money = 0;
  if (c.earnings == null) c.earnings = 0;
  if (c.spent == null) c.spent = 0;
  if (c.teamFees == null) c.teamFees = 0;
  if (c.surgeryCost == null) c.surgeryCost = 0;
  if (c.charityTotal == null) c.charityTotal = 0;
  if (!Array.isArray(c.purchases)) c.purchases = [];
  if (!Array.isArray(c.assets)) c.assets = [];
  if (!Array.isArray(c.moneyLog)) c.moneyLog = [];
  if (c.currentSalary == null) c.currentSalary = 0;
  if (!c.flags) c.flags = {};
  if (!c.flags.teamTreat) c.flags.teamTreat = {};
  return c;
}


function addMoney(delta, reason) {
  var c = ensureEconomyState();
  delta = Math.round(Number(delta) || 0);
  if (!delta) return true;
  if (delta < 0 && c.money + delta < 0) return false;
  c.money += delta;
  if (delta > 0) c.earnings += delta; else c.spent += -delta;
  if (reason) {
    c.moneyLog.push({ t: Date.now(), delta: delta, reason: reason });
    if (c.moneyLog.length > 200) c.moneyLog = c.moneyLog.slice(-200);
  }
  return true;
}


function getCurrentSalary() {
  return ensureEconomyState().currentSalary || 0;
}


function fmtMoney(v) {
  v = Math.round(Number(v) || 0);
  var neg = v < 0;
  var a = Math.abs(v);
  if (a >= 10000) {
    // 以“百分之一亿”为单位保留 2 位小数精度，避免浮点误差（10050万 → 1.01亿）
    var yi = Math.round(a / 100) / 100;
    var s = (yi % 1 === 0) ? String(yi) : String(yi).replace(/\.?0+$/, '');
    return (neg ? '-' : '') + s + '亿';
  }
  return (neg ? '-' : '') + a + '万';
}


function econFluctVal(seed, salt, min, max) {
  var s = String(seed || '') + '|' + (salt != null ? salt : '');
  var h = 0;
  for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return min + (h % 1000) / 1000 * (max - min);
}


function getSalaryYearFactor(seed) {
  var cfg = getEconCfg();
  var season = (STATE.career && STATE.career.seasonCount) || 0;
  var min = (cfg.salaryYearMin != null) ? cfg.salaryYearMin : 0.02;
  var fl = cfg.salaryYearFluct || [0, 0.04];
  var rate = min + econFluctVal(seed, season, fl[0], fl[1]);
  return Math.pow(1 + rate, season);
}


function estimatePlayerSalary(p, age, ovr) {
  var cfg = getEconCfg();
  var eraMode = (typeof isEraEconomyActive === 'function') && isEraEconomyActive();
  var sb = getSalaryBases();
  var ov = parseInt(ovr != null ? ovr : (p && p.ovr)) || 75;
  var ag = age != null ? age : ((p && p._age) || 27);
  var base = sb.min ? sb.min.base : 600, type = 'min';
  if (ov >= ((sb.max && sb.max.minOvr) || 92)) { base = sb.max.base; type = 'max'; }
  else if (ov >= ((sb.star && sb.star.minOvr) || 89)) { base = sb.star.base; type = 'star'; }
  else if (ov >= ((sb.starter && sb.starter.minOvr) || 85)) { base = sb.starter.base; type = 'starter'; }
  else if (ov >= ((sb.mid && sb.mid.minOvr) || 78)) { base = sb.mid.base; type = 'mid'; }
  // ★ 老将年龄封顶（与玩家报价一致）：35-36 首发（88+ 可明星）、37-38 中产、39+ 底薪
  var _ageCap = '';
  if (ag >= 39) _ageCap = 'min';
  else if (ag >= 37) _ageCap = 'mid';
  else if (ag >= 35) _ageCap = (ov >= (cfg.veteranStarOvr || 88)) ? 'star' : 'starter';
  if (_ageCap && sb[_ageCap]) { type = _ageCap; base = sb[_ageCap].base; }
  var ageF = 1;
  if (ag <= 22) ageF = 0.55;
  else if (ag <= 25) ageF = 0.8;
  else if (ag >= 40) ageF = 0.5;
  else if (ag >= 39) ageF = 0.6;
  else if (ag >= 38) ageF = 0.7;
  else if (ag >= 37) ageF = 0.8;
  else if (ag >= 36) ageF = 0.85;
  else if (ag >= 35) ageF = 0.9;
  else if (ag >= 33) ageF = 0.92;
  var salary = base * ageF;
  // ★ 年度上涨（只涨不跌）：按赛季复利；历史时代帽已按真实轨迹变化，不再叠加年涨因子
  if (!eraMode) salary *= getSalaryYearFactor(p ? (p.name || p.cname || 'npc') : 'npc');
  if (p && p.contractType === 'rookie') {
    if (eraMode && typeof eraRookieSalary === 'function') {
      var _eraRY = (typeof getEraEconomyYear === 'function') ? getEraEconomyYear() : 1984;
      salary = eraRookieSalary(_eraRY, (p && p._draftPick) || 15);
    } else {
      var rs = cfg.rookieSalary || {};
      var pk = p._pickType || p.type || '';
      salary = rs[pk] || rs.first || 900;
    }
  }
  // ★ 已写入的真实合同薪资（现役 REAL_CONTRACTS / 历史 HISTORICAL_REAL_CONTRACTS）直接保留，不再取整或套下限
  if (p && typeof p.salary === 'number' && p.salary > 0) return Math.round(p.salary);
  var _floor = (sb.min && sb.min.base) || 600;
  return Math.max(_floor, Math.round(salary / 50) * 50);
}


function getTeamPayroll(team) {
  var roster = (NBA2K_DATA && NBA2K_DATA[team]) || [];
  var total = 0;
  roster.forEach(function(p) {
    if (!p || p._isUser) return;
    var age = typeof getLeaguePlayerAge === 'function' ? getLeaguePlayerAge(p) : (p._age || 27);
    total += estimatePlayerSalary(p, age, p.ovr);
  });
  return Math.round(total);
}

/** 球队帽下空间（万）：负数 = 超帽；不统计玩家（玩家薪资单列） */
function getCapSpace(team) {
  var cap = (typeof getSalaryCap === 'function') ? getSalaryCap() : 14000;
  var payroll = getTeamPayroll(team);
  return cap - payroll;
}

/** 奢侈税线（万）：简化 = 工资帽 × 1.25（可用 SIM_ECONOMY.luxuryMult 覆盖），返回 { line, payroll, over } */
function getLuxuryStatus(team) {
  var cfg = getEconCfg();
  var cap = (typeof getSalaryCap === 'function') ? getSalaryCap() : 14000;
  var mult = (cfg && cfg.luxuryMult) || 1.25;
  var line = Math.round(cap * mult);
  var payroll = getTeamPayroll(team);
  return { line: line, payroll: payroll, over: payroll > line };
}


function getSalaryCap() {
  var cfg = getEconCfg();
  // ★ 历史时代：工资帽按真实历史轨迹（1984=360万 → 1997=2690万 → 2018=10180万 → 之后+3%/年外推）
  if (STATE && STATE.draftMode === 'historical' && typeof getEraSalaryCap === 'function') {
    var sc = (STATE.career && STATE.career.seasonCount) || 0;
    var yr = parseInt(STATE.eraStart || 1984, 10) + sc;
    return Math.round(getEraSalaryCap(yr));
  }
  // ★ 现实模式：工资帽与年薪年度上涨同步（只涨不跌，涨幅一致），避免帽与薪水脱节
  return Math.round((cfg.capStart || 14000) * getSalaryYearFactor('cap'));
}


function computeOfferSalary(team, myOvr, myAge, role, needStrength, biz, opts) {
  var cfg = getEconCfg();
  var eraMode = (typeof isEraEconomyActive === 'function') && isEraEconomyActive();
  var sb = getSalaryBases();
  opts = opts || {};
  var base = 0, type = 'min';
  if (role === '巨星联手' || myOvr >= ((sb.max && sb.max.minOvr) || 92)) { base = sb.max.base; type = 'max'; }
  else if (myOvr >= ((sb.star && sb.star.minOvr) || 89)) { base = sb.star.base; type = 'star'; }
  else if (myOvr >= ((sb.starter && sb.starter.minOvr) || 85)) { base = sb.starter.base; type = 'starter'; }
  else if (myOvr >= ((sb.mid && sb.mid.minOvr) || 78)) { base = sb.mid.base; type = 'mid'; }
  else { base = sb.min.base; type = 'min'; }
  // ★ 老将年龄封顶（保留“不给顶薪”底线，缓和降薪）：35-36 首发（88+ 可明星）、37-38 中产、39+ 底薪
  var _ageCap = '';
  if (myAge >= 39) _ageCap = 'min';
  else if (myAge >= 37) _ageCap = 'mid';
  else if (myAge >= 35) _ageCap = (myOvr >= (cfg.veteranStarOvr || 88)) ? 'star' : 'starter';
  if (_ageCap && sb[_ageCap]) { type = _ageCap; base = sb[_ageCap].base; }
  var ageF = 1;
  if (myAge <= 22) ageF = 0.6;
  else if (myAge <= 25) ageF = 0.8;
  else if (myAge >= 40) ageF = 0.5;
  else if (myAge >= 39) ageF = 0.6;
  else if (myAge >= 38) ageF = 0.7;
  else if (myAge >= 37) ageF = 0.8;
  else if (myAge >= 36) ageF = 0.85;
  else if (myAge >= 35) ageF = 0.9;
  else if (myAge >= 33) ageF = 0.92;
  var salary = base * ageF;
  // ★ 年度上涨（只涨不跌）：按赛季复利，同一球队报价显示与签约一致
  if (!eraMode) salary *= getSalaryYearFactor(team + (opts.renew ? '-renew' : ''));
  if (!opts.noTeamFactor) {
    // 弱队/摆烂队补强溢价
    var rec = typeof getLastSeasonRecord === 'function' ? getLastSeasonRecord(team) : null;
    var winPct = rec && (rec.wins + rec.losses) > 0 ? rec.wins / (rec.wins + rec.losses) : 0.5;
    var wp = cfg.weakTeamPremium || {};
    if (winPct < (wp.winPct || 0.45)) {
      var prem = (wp.maxPremium || 0.30) * Math.min(1, ((wp.winPct || 0.45) - winPct) / (wp.winPct || 0.45));
      salary *= 1 + prem;
    }
    // 大市场折扣 / 小球市溢价
    if (ECON_BIG_MARKET.indexOf(team) >= 0) salary *= (cfg.bigMarketDiscount || 0.90);
    else salary *= (cfg.smallMarketPremium || 1.10);
    // 位置缺口加成
    if (needStrength != null && needStrength >= 10) salary *= 1.08;
  }
  // 老将期（短约）压到年龄封顶档（35-36 首发/88+ 明星、37-38 中产、39+ 底薪）
  if (typeof isVeteranPhase === 'function' && isVeteranPhase(myAge)) {
    var _vc = _ageCap || 'min';
    type = _vc;
    salary = Math.min(salary, (sb[_vc] && sb[_vc].base) || 600);
  }
  // ★ 顶薪封顶：现实模式随年度上涨因子同步；历史时代按当年帽 × 顶薪比例
  if (eraMode && typeof eraMaxSalaryPct === 'function' && typeof getEraEconomyYear === 'function') {
    var _eraCapMax = (typeof getEraSalaryCap === 'function') ? getEraSalaryCap(getEraEconomyYear()) : 360;
    var _eraSvc = (STATE.career && STATE.career.seasonCount) || 0;
    salary = Math.min(salary, _eraCapMax * eraMaxSalaryPct(getEraEconomyYear(), _eraSvc) / 100);
  } else {
    salary = Math.min(salary, (cfg.maxSalaryCap || 6000) * getSalaryYearFactor('maxcap'));
  }
  return { annualSalary: Math.round(salary / 50) * 50, salaryType: type };
}


function grantAwardMoney() {
  var cfg = getEconCfg();
  var bonus = cfg.awardBonus || {};
  var awards = (STATE.season && STATE.season.awards) || [];
  var granted = [];
  awards.forEach(function(a) {
    if (!a || !a.isUser || !a.act) return;
    var amt = bonus[a.act];
    if (!amt) return;
    // ★ 历史时代：奖项奖金按年代缩放
    var _amt2 = (typeof eraMoney === 'function') ? eraMoney(amt) : amt;
    if (addMoney(_amt2, '奖项奖金：' + (a.label || a.act))) granted.push({ act: a.act, label: a.label, amt: _amt2 });
  });
  return granted;
}


function settleAnnualSalary(force) {
  var c = ensureEconomyState();
  var seasonKey = 'S' + (c.seasonCount || 0);
  if (!force && c._salarySettledSeason === seasonKey) return null;
  c._salarySettledSeason = seasonKey;
  var gross = getCurrentSalary();
  var cfg = getEconCfg();
  var tax = Math.round(gross * (cfg.taxRate || 0.525));
  var team = Math.round(gross * (cfg.teamFeeRate || 0.10));
  var net = gross - tax - team;
  addMoney(net, '年薪结算（税后与团队维护后）');
  c.teamFees += team;
  var bonus = grantAwardMoney();
  var sum = { gross: gross, tax: tax, team: team, net: net, bonus: bonus };
  STATE._salarySettlement = sum;
  return sum;
}


var ECON_BIG_MARKET = ['LAL', 'NYK', 'GSW', 'MIA', 'CHI', 'BOS', 'DAL', 'HOU', 'PHI', 'TOR'];


// ============ 合并自 league-economy.js ============

// ============================================================
// league-economy.js —— 联盟经济/自由市场（阶段 A：从 __ai_app.html 外置）
// NPC 合同年限 / 自由市场签约分配。依赖 era-economics.js(时代合同)、
// rngNext / canPlayPosition / isFreshlySigned 等主块函数（调用时引用）。
// ============================================================


function randomContractByAge(age, p) {
  // ★ 历史时代：NPC 续约按时代合同规则（1984-94 球星 5-8 / 1999-04 4-6 / 2005+ 3-5）
  if (typeof isEraEconomyActive === 'function' && isEraEconomyActive() && typeof eraNpcContractYears === 'function') {
    var _yC = (typeof getEraEconomyYear === 'function') ? getEraEconomyYear() : 1984;
    var _ovC = (p && p.ovr) || 75;
    return eraNpcContractYears(_yC, _ovC, age, _ovC >= 85);
  }
  if (age <= 23) return 2 + Math.floor(rngNext() * 3);
  if (age <= 26) return 2 + Math.floor(rngNext() * 2);
  if (age <= 30) return 1 + Math.floor(rngNext() * 3);
  if (age <= 33) return 1 + Math.floor(rngNext() * 2);
  return 1;
}


function assignFreeAgents() {
  var pool = STATE._freeAgentPool || [];
  if (pool.length === 0) return;

  if (!STATE._leagueChanges) STATE._leagueChanges = {};
  if (!STATE._leagueChanges.freeSignings) STATE._leagueChanges.freeSignings = [];

  console.log('[FA] 自由球员分配:', pool.length, '人');

  pool.sort(function(a, b) { return b.ovr - a.ovr; });
  var st = STATE._prevStandings;
  var teams = getEraTeamPool().sort(function(a, b) {
    var aw = (st && st[a] && st[a].wins) || 0, al = (st && st[a] && st[a].losses) || 0;
    var bw = (st && st[b] && st[b].wins) || 0, bl = (st && st[b] && st[b].losses) || 0;
    return (aw + al > 0 ? aw / (aw + al) : 0.5) - (bw + bl > 0 ? bw / (bw + bl) : 0.5);
  });

  // 本轮自由市场已签约 OVR ≥ 86 的球队（防扎堆）
  var starSignedTeams = {};

  pool.forEach(function(fa) {
    // ★ 历史时代：自由市场签约即写入时代合同年限（旧版签约后 contract 保持 0，次季会再进市场）
    if (typeof isEraEconomyActive === 'function' && isEraEconomyActive() && typeof eraNpcContractYears === 'function') {
      fa.contract = eraNpcContractYears((typeof getEraEconomyYear === 'function') ? getEraEconomyYear() : 1984, fa.ovr || 75, getLeaguePlayerAge(fa), (fa.ovr || 0) >= 85);
    }
    if (!fa._origTeam) console.log('[FA] 无_origTeam:', (fa.cname||fa.name), 'ovr:', fa.ovr);
    var pos = (fa.pos || 'SF').split('/')[0].trim();
    for (var ti = 0; ti < teams.length; ti++) {
      var t = teams[ti];
      if (t === fa._origTeam) { console.log('[FA] 跳过回原队:', (fa.cname||fa.name), fa._origTeam); continue; }
      if (fa.ovr > 86) {
        if (starSignedTeams[t]) { console.log('[FA] 该队已签球星，跳过:', (fa.cname||fa.name), t); continue; }
        var hasStar = false;
        (NBA2K_DATA[t] || []).forEach(function(p) {
          if (p !== fa && !p._isUser && canPlayPosition(p.pos || '', pos) && p.ovr >= 84) hasStar = true;
        });
        if (hasStar) continue;
      }
      var roster = NBA2K_DATA[t];
      if (!roster || roster.length >= 18) continue;
      var posCount = 0;
      roster.forEach(function(p) {
        if (canPlayPosition(p.pos || '', pos)) posCount++;
      });
      if (posCount < 2) {
        try { ensureDualPos(fa); } catch(e) {}
        roster.push(fa);
        fa._justSigned = true;
        fa._justSignedSeason = STATE.career ? (STATE.career.seasonCount || 0) : 0;
        if (fa.ovr > 86) starSignedTeams[t] = true;
        STATE._leagueChanges.freeSignings.push({ name: fa.cname || fa.name, nameEN: fa.name, from: fa._origTeam, to: t, ovr: fa.ovr });
        if (t === STATE.careerTeam) {
          if (!STATE._leagueChanges.teamChanges) STATE._leagueChanges.teamChanges = {};
          STATE._leagueChanges.teamChanges[t] = STATE._leagueChanges.teamChanges[t] || { retired: [], rookies: [] };
          STATE._leagueChanges.teamChanges[t].rookies.push(fa.cname || fa.name);
        }
        return;
      }
    }
    // fallback
    for (var fi = 0; fi < teams.length; fi++) {
      var fb = teams[fi];
      if (fb === fa._origTeam) { console.log('[FA] fallback跳过回原队:', (fa.cname||fa.name), fa._origTeam); continue; }
      if (fa.ovr > 86) {
        if (starSignedTeams[fb]) continue;
        var hasStarFB = false;
        (NBA2K_DATA[fb] || []).forEach(function(p) {
          if (p !== fa && !p._isUser && p.ovr >= 84) hasStarFB = true;
        });
        if (hasStarFB) continue;
      }
      var fbRoster = NBA2K_DATA[fb];
      if (fbRoster && fbRoster.length < 18) {
        fbRoster.push(fa);
        fa._justSigned = true;
        fa._justSignedSeason = STATE.career ? (STATE.career.seasonCount || 0) : 0;
        if (fa.ovr > 86) starSignedTeams[fb] = true;
        STATE._leagueChanges.freeSignings.push({ name: fa.cname || fa.name, nameEN: fa.name, from: fa._origTeam, to: fb, ovr: fa.ovr });
        break;
      }
    }
  });

  STATE._freeAgentPool = [];
}
