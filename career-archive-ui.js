// ==================== 球员档案库（虎扑风格） ====================
function showCareerArchive() {
  var old = document.getElementById('archive-list-overlay');
  if (old) old.remove();
  var overlay = document.createElement('div');
  overlay.className = 'archive-library-overlay';
  overlay.id = 'archive-list-overlay';
  overlay.innerHTML = '<div class="archive-lib-header"><button class="btn btn-secondary btn-sm" onclick="document.getElementById(\'archive-list-overlay\').remove()">返回</button><div class="archive-lib-title">📂 球员档案库</div></div>' +
    '<div class="archive-lib-content"><div class="archive-toolbar"><div class="archive-sort" id="archive-sort-bar"></div><div style="flex:1;"></div><span style="font-size:11px;color:var(--text-dim);" id="archive-count"></span></div><div class="archive-grid" id="archive-grid"></div></div>';
  document.body.appendChild(overlay);
  renderArchiveLibrary();
}

function getArchiveSortKey() {
  return (window._archiveSortKey) || 'time';
}
function setArchiveSortKey(k) {
  window._archiveSortKey = k;
  renderArchiveLibrary();
}


function getArchiveTierLabel(legacy) {
  var tier = legacy && legacy.tier ? legacy.tier : '';
  if (tier.indexOf('GOAT') >= 0 || tier.indexOf('历史前十') >= 0 || tier.indexOf('历史前二十') >= 0) return 'EPIC';
  if (legacy && (legacy.top100 || legacy.hof)) return 'LEGEND';
  if (tier.indexOf('历史前五十') >= 0 || tier.indexOf('历史百大') >= 0) return 'LEGEND';
  return 'CLASSIC';
}

var CAREER_TITLE_POOL = [
  { tags: ['champion'], title: '冠军之心' },
  { tags: ['champion'], title: '指环王' },
  { tags: ['champion'], title: '胜利图腾' },
  { tags: ['champion'], title: '冠军拼图' },
  { tags: ['champion'], title: '金色指环' },
  { tags: ['champion'], title: '王者归途' },
  { tags: ['champion'], title: '荣誉收藏家' },
  { tags: ['champion'], title: '胜利常客' },
  { tags: ['champion'], title: '巅峰执笔者' },
  { tags: ['champion'], title: '冠军之夜' },
  { tags: ['dynasty', 'champion'], title: '王朝之光' },
  { tags: ['dynasty', 'champion'], title: '王朝奠基人' },
  { tags: ['dynasty', 'champion'], title: '黄金时代' },
  { tags: ['dynasty', 'champion'], title: '王座守护者' },
  { tags: ['dynasty', 'champion'], title: '王朝脊梁' },
  { tags: ['dynasty', 'champion'], title: '时代奠基者' },
  { tags: ['mvp'], title: '最有价值先生' },
  { tags: ['mvp'], title: '巅峰之王' },
  { tags: ['mvp', 'allstar'], title: '赛场主角' },
  { tags: ['mvp', 'longevity'], title: '常青MVP' },
  { tags: ['fmvp', 'clutch'], title: '决胜之王' },
  { tags: ['fmvp'], title: '总决赛主角' },
  { tags: ['fmvp', 'clutch'], title: '关键时刻登记者' },
  { tags: ['defense', 'big'], title: '禁区守护神' },
  { tags: ['defense'], title: '铁壁将军' },
  { tags: ['defense'], title: '防守教科书' },
  { tags: ['defense'], title: '盖帽艺术家' },
  { tags: ['defense'], title: '抢断猎手' },
  { tags: ['defense', 'big'], title: '篮下长城' },
  { tags: ['defense'], title: '封锁大师' },
  { tags: ['defense'], title: '防守之魂' },
  { tags: ['defense'], title: '铁血守卫' },
  { tags: ['defense'], title: '防守之盾' },
  { tags: ['scorer'], title: '得分艺术家' },
  { tags: ['scorer'], title: '得分之刃' },
  { tags: ['scorer'], title: '进攻万花筒' },
  { tags: ['scorer'], title: '手感魔法师' },
  { tags: ['scorer'], title: '砍分狂想曲' },
  { tags: ['scorer'], title: '篮筐信使' },
  { tags: ['scorer', 'longevity'], title: '得分常青树' },
  { tags: ['scorer'], title: '火力全开' },
  { tags: ['scorer'], title: '得分手记' },
  { tags: ['scorer'], title: '得分记录者' },
  { tags: ['playmaker'], title: '球场指挥官' },
  { tags: ['playmaker'], title: '传球诗人' },
  { tags: ['playmaker'], title: '助攻魔法师' },
  { tags: ['playmaker'], title: '组织大师' },
  { tags: ['playmaker'], title: '节奏控制者' },
  { tags: ['playmaker'], title: '球场导演' },
  { tags: ['playmaker'], title: '串联之手' },
  { tags: ['playmaker'], title: '助攻之眼' },
  { tags: ['big'], title: '篮板磁铁' },
  { tags: ['big'], title: '禁区巨塔' },
  { tags: ['big'], title: '内线磐石' },
  { tags: ['big'], title: '篮板之王' },
  { tags: ['big'], title: '篮下堡垒' },
  { tags: ['big', 'defense'], title: '制空权拥有者' },
  { tags: ['allstar'], title: '星光常客' },
  { tags: ['allstar'], title: '聚光灯宠儿' },
  { tags: ['allstar'], title: '全明星名片' },
  { tags: ['allstar'], title: '人气之星' },
  { tags: ['allstar'], title: '球迷之心' },
  { tags: ['allstar'], title: '舞台明星' },
  { tags: ['allstar'], title: '掌声收藏家' },
  { tags: ['allstar'], title: '星光大道' },
  { tags: ['longevity'], title: '岁月卫士' },
  { tags: ['longevity'], title: '铁人传奇' },
  { tags: ['longevity'], title: '常青之树' },
  { tags: ['longevity', 'multi'], title: '时光旅人' },
  { tags: ['longevity'], title: '长跑冠军' },
  { tags: ['longevity'], title: '耐久之王' },
  { tags: ['longevity'], title: '出场纪录者' },
  { tags: ['longevity', 'multi'], title: '横跨时代' },
  { tags: ['one_city'], title: '城市之子' },
  { tags: ['one_city'], title: '忠诚守望者' },
  { tags: ['one_city'], title: '一城传奇' },
  { tags: ['one_city'], title: '城市丰碑' },
  { tags: ['one_city'], title: '主队之心' },
  { tags: ['one_city'], title: '城市名片' },
  { tags: ['one_city'], title: '主场信仰' },
  { tags: ['one_city'], title: '故乡之光' },
  { tags: ['multi'], title: '城市行者' },
  { tags: ['multi'], title: '四海名宿' },
  { tags: ['multi'], title: '旅途传奇' },
  { tags: ['multi'], title: '城市漫游者' },
  { tags: ['multi'], title: '客乡之光' },
  { tags: ['multi'], title: '四海为家' },
  { tags: ['clutch'], title: '关键先生' },
  { tags: ['clutch', 'scorer'], title: '末节之王' },
  { tags: ['clutch'], title: '决胜时刻' },
  { tags: ['leader', 'camp'], title: '领袖之心' },
  { tags: ['leader', 'camp'], title: '更衣室灯塔' },
  { tags: ['clutch', 'leader'], title: '定海神针' },
  { tags: ['clutch'], title: '大心脏' },
  { tags: ['clutch', 'leader'], title: '逆风掌舵人' },
  { tags: ['legacy'], title: '殿堂之星' },
  { tags: ['legacy'], title: '传奇图腾' },
  { tags: ['legacy'], title: '历史守望者' },
  { tags: ['legacy'], title: '不朽名宿' },
  { tags: ['legacy'], title: '史诗主角' }
];

function archiveTitleSeed(str) {
  var h = 0;
  str = String(str || '');
  for (var i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getArchiveCareerTitle(entry) {
  var c = entry.career || {};
  var flags = c.flags || {};
  var honors = c.honors || [];
  function cnt(key) {
    return honors.filter(function(h) { return h && (h.label || '').indexOf(key) >= 0; }).length;
  }
  var tags = [];
  if (cnt('总冠军') > 0) tags.push('champion');
  if (cnt('总冠军') >= 3) tags.push('dynasty');
  if (honors.some(function(h) { return h && h.label === 'MVP'; })) tags.push('mvp');
  if (cnt('总决赛MVP') + cnt('FMVP') > 0) tags.push('fmvp');
  if (cnt('DPOY') > 0) tags.push('defense');
  if (cnt('全明星') > 0) tags.push('allstar');
  var ts = c.totalStats || {};
  var gp = Math.max(ts.games || 0, 1);
  var avgPts = (ts.pts || 0) / gp;
  var avgAst = (ts.ast || 0) / gp;
  var avgReb = (ts.reb || 0) / gp;
  if (avgPts >= 25) tags.push('scorer');
  if (avgAst >= 7) tags.push('playmaker');
  if (avgReb >= 10) tags.push('big');
  var seasons = (c.seasons || []).length;
  if (seasons >= 12) tags.push('longevity');
  var teams = [];
  (c.seasons || []).forEach(function(s) { if (s && s.team && teams.indexOf(s.team) < 0) teams.push(s.team); });
  if (teams.length === 1) tags.push('one_city');
  else if (teams.length >= 3) tags.push('multi');
  if (entry.attrs && (entry.attrs.CLU || 0) >= 80) tags.push('clutch');
  var prof = c.profile || {};
  var _leaderEv = !!(flags.lockerRoomLeader || flags.leaderStory || flags.lockerRoomStandup);
  if ((prof.lockerRoomTrust || 0) >= 5 || (prof.leadership || 0) >= 2 || _leaderEv) tags.push('leader');
  if (flags.campSupport || flags.campSign || flags.campFree || flags.campLesson || flags.studentProdigy || flags.studentHardship || flags.studentRebel || flags.studentQuiet) tags.push('camp');
  var tierLabel = getArchiveTierLabel(entry.legacy || c.legacy);
  if (tierLabel === 'EPIC' || tierLabel === 'LEGEND') tags.push('legacy');
  var scored = CAREER_TITLE_POOL.map(function(item) {
    var score = 0;
    (item.tags || []).forEach(function(t) { if (tags.indexOf(t) >= 0) score += 5; });
    return { item: item, score: score };
  });
  var best = 0;
  scored.forEach(function(s) { if (s.score > best) best = s.score; });
  var pool = scored.filter(function(s) { return s.score >= best - 1; });
  var seed = archiveTitleSeed(String(entry.gameId || '') + '|' + (entry.name || '') + '|' + String(entry.serial || 0));
  return pool[seed % pool.length].item.title;
}

function getArchivePlayerType(c) {
  if (!c) return '球员';
  var honors = c.honors || [];
  function cnt(key) {
    return honors.filter(function(h) { return h && (h.label || '').indexOf(key) >= 0; }).length;
  }
  var championships = cnt('总冠军');
  var mvp = honors.filter(function(h) { return h && h.label === 'MVP'; }).length;
  var dpoy = cnt('DPOY');
  var allNBA = cnt('最佳阵容');
  var ts = c.totalStats || {};
  var gp = Math.max(ts.games || 0, 1);
  var avgPts = (ts.pts || 0) / gp;
  var avgAst = (ts.ast || 0) / gp;
  var teams = [];
  (c.seasons || []).forEach(function(s) { if (s && s.team && teams.indexOf(s.team) < 0) teams.push(s.team); });
  if (dpoy >= Math.max(1, mvp) && dpoy > 0) return '防守图腾';
  if (championships >= 3) return '王朝基石';
  if (avgPts >= 25) return '得分机器';
  if (avgAst >= 7) return '组织核心';
  if (championships === 0 && allNBA >= 3) return '无冕英雄';
  if (teams.length >= 3) return '漂泊巨星';
  return '球队基石';
}

function getArchiveChampCount(entry) {
  var c = entry && entry.career;
  var honors = c && c.honors ? c.honors : [];
  return honors.filter(function(h) { return h && (h.label || '').indexOf('总冠军') >= 0; }).length;
}

function getArchiveSortValue(entry, key) {
  if (key === 'ovr') return entry.finalOVR || 0;
  if (key === 'champ') return getArchiveChampCount(entry);
  return entry.savedAt || 0;
}

function getArchiveTeamLogo(team, size) {
  if (!team) return '';
  var src = window.TEAM_LOGOS && window.TEAM_LOGOS[team];
  if (!src) return team;
  var s = size || 14;
  return '<img class="team-logo" src="' + src + '" style="width:' + s + 'px;height:' + s + 'px;vertical-align:middle;border-radius:4px;" alt="' + team + '">';
}

function renderArchiveLibrary() {
  var grid = document.getElementById('archive-grid');
  if (!grid) return;
  var list = loadCareerArchive();
  var sortKey = getArchiveSortKey();
  var sortBar = document.getElementById('archive-sort-bar');
  if (sortBar) {
    sortBar.innerHTML = [['time','时间'],['champ','冠军'],['ovr','总评']].map(function(o) {
      return '<button class="' + (sortKey === o[0] ? 'active' : '') + '" onclick="setArchiveSortKey(\'' + o[0] + '\')">' + o[1] + '</button>';
    }).join('');
  }
  var countEl = document.getElementById('archive-count');
  if (countEl) countEl.textContent = list.length + ' 份档案';
  if (!list.length) {
    grid.innerHTML = '<div class="archive-empty">📂 还没有退役球员档案<br><br>完成一局正式退役后会自动收录到这里</div>';
    return;
  }
  var sorted = list.slice().sort(function(a, b) {
    if (sortKey === 'champ') return (b.champCount || 0) - (a.champCount || 0);
    if (sortKey === 'ovr') return (b.finalOVR || 0) - (a.finalOVR || 0);
    return (b.savedAt || 0) - (a.savedAt || 0);
  });
  var html = '';
  sorted.forEach(function(a, idx) {
    var c = a.career || {};
    var teams = [];
    (c.seasons || []).forEach(function(s) { if (s && s.team && teams.indexOf(s.team) < 0) teams.push(s.team); });
    if (!teams.length && a.careerTeam) teams.push(a.careerTeam);
    var logoSize = Math.max(6, Math.min(16, Math.floor((150 - 2 * Math.max(0, teams.length - 1)) / Math.max(teams.length, 1))));
    // ★ 档案卡队标：历史生涯按“退役那年”的图标显示（84 年打到退役 → 用退役那年队标；旧档案无 retireYear 则回退现代标）
    var _retireYear = (a.draftMode === 'historical' && a.retireYear != null) ? parseInt(a.retireYear, 10) : null;
    var teamHtml = teams.map(function(t) {
      var _src = null;
      if (_retireYear && typeof getEraTeamLogo === 'function') { try { _src = getEraTeamLogo(t, _retireYear); } catch(e) {} }
      if (!_src && window.TEAM_LOGOS && window.TEAM_LOGOS[t]) _src = window.TEAM_LOGOS[t];
      return _src ? '<img class="team-logo" src="' + _src + '" style="width:' + logoSize + 'px;height:' + logoSize + 'px;border-radius:4px;">' : '';
    }).join('');
    var tier = getArchiveTierLabel(a.legacy || (a.career && a.career.legacy));
    var seasons = (c.seasons || []).length;
    var rot = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 0.5, 2.5, -0.5, 1.5, -1.5][idx % 12];
    html += '<div class="archive-folder" style="--rot:' + rot + 'deg;animation-delay:' + (idx * 0.06) + 's" onclick="viewArchiveDetail(' + idx + ')">' +
      '<div class="af-tab">No.' + String(idx + 1).padStart(3, '0') + '</div>' +
      '<div class="af-name">' + getArchiveCareerTitle(a) + '</div>' +
      '<div class="af-meta">' + (a.position || '球员') + ' · OVR ' + (a.finalOVR || 0) + '</div>' +
      '<div class="af-meta">' + seasons + '年生涯</div>' +
      '<div class="af-teams">' + teamHtml + '</div>' +
      '<span class="af-stamp">' + tier + '</span>' +
      '<span class="af-clasp"></span>' +
      '</div>';
  });
  grid.innerHTML = html;
}




var _archiveDetail = null;

/** 档案显示名：优先快照名，其次存档内 playerName（旧档案兜底），避免只显示“自建球员” */
function getArchiveEntryName(snap) {
  var n = snap && snap.name ? String(snap.name) : '';
  if (n && n !== '自建球员') return n;
  if (snap && snap.career && snap.career.playerName) return snap.career.playerName;
  return n || '自建球员';
}

/** 移植虎扑最新版：用档案数据临时渲染海报（不动当前游戏） */
function withArchiveContext(snap, fn) {
  var saved = { career: STATE.career, attrs: STATE.attrs, finalOVR: STATE.finalOVR, finalPosition: STATE.finalPosition, position: STATE.position, careerTeam: STATE.careerTeam, finalArchetype: STATE.finalArchetype, userAvatar: STATE.userAvatar, draftMode: STATE.draftMode, eraStart: STATE.eraStart };
  var hupuSaved = { nickname: HUPU_USER.nickname, isLogin: HUPU_USER.isLogin, avatar: HUPU_USER.avatar };
  var customSaved = null;
  try { customSaved = localStorage.getItem('buildplayer_nickname'); } catch(e) {}
  try {
    STATE.career = JSON.parse(JSON.stringify(snap.career || {}));
    STATE.attrs = JSON.parse(JSON.stringify(snap.attrs || {}));
    STATE.finalOVR = snap.finalOVR || 0;
    STATE.finalPosition = snap.finalPosition || snap.position || null;
    STATE.position = snap.position || null;
    STATE.careerTeam = snap.careerTeam || null;
    STATE.finalArchetype = snap.finalArchetype || null;
    HUPU_USER.nickname = (typeof getArchiveEntryName === 'function') ? getArchiveEntryName(snap) : (snap.name || '自建球员');
    HUPU_USER.isLogin = true;
    if (snap.avatar) { STATE.userAvatar = snap.avatar; HUPU_USER.avatar = snap.avatar; }
    try { localStorage.removeItem('buildplayer_nickname'); } catch(e) {}
    // 档案海报按档案所属模式渲染（历史模式年份用 eraStart 换算，避免用当前游戏模式错算）
    if (snap.draftMode) STATE.draftMode = snap.draftMode;
    if (snap.eraStart != null) STATE.eraStart = snap.eraStart;
    return fn();
  } finally {
    STATE.career = saved.career;
    STATE.attrs = saved.attrs;
    STATE.finalOVR = saved.finalOVR;
    STATE.finalPosition = saved.finalPosition;
    STATE.position = saved.position;
    STATE.careerTeam = saved.careerTeam;
    STATE.finalArchetype = saved.finalArchetype;
    HUPU_USER.nickname = hupuSaved.nickname;
    HUPU_USER.isLogin = hupuSaved.isLogin;
    HUPU_USER.avatar = hupuSaved.avatar;
    STATE.userAvatar = saved.userAvatar;
    STATE.draftMode = saved.draftMode;
    STATE.eraStart = saved.eraStart;
    if (customSaved != null) { try { localStorage.setItem('buildplayer_nickname', customSaved); } catch(e) {} }
  }
}

function generateArchivePosterPages(snap) {
  return withArchiveContext(snap, function() {
    var captured = [];
    var orig = window.setPosterPages;
    window.setPosterPages = function(pages) { captured = (pages || []).filter(Boolean).slice(); };
    try {
      if (typeof preloadPosterTeamLogos === 'function') { try { preloadPosterTeamLogos(); } catch(e) {} }
      generateCareerPoster();
    } finally {
      window.setPosterPages = orig;
    }
    return captured;
  });
}

function viewArchiveDetail(idx) {
  var list = loadCareerArchive();
  var sorted = list.slice().sort(function(a, b) {
    var k = getArchiveSortKey();
    if (k === 'champ') return (b.champCount || 0) - (a.champCount || 0);
    if (k === 'ovr') return (b.finalOVR || 0) - (a.finalOVR || 0);
    return (b.savedAt || 0) - (a.savedAt || 0);
  });
  var entry = sorted[idx];
  if (!entry) return;
  var pages = [];
  try { pages = generateArchivePosterPages(entry); } catch(e) { pages = []; }
  if (!pages.length) { showSaveToast('海报生成失败'); return; }
  _archiveDetail = { entry: entry, pages: pages, index: 0 };
  renderArchiveDetailPop();
  renderArchiveDetailModal();
}

function renderArchiveDetailPop() {
  var oldView = document.getElementById('archivePopContent');
  if (oldView) oldView.remove();
  var oldBack = document.getElementById('archiveDetailBackBtn');
  if (oldBack) oldBack.remove();
  var oldDel = document.getElementById('archiveDetailDelBtn');
  if (oldDel) oldDel.remove();
  var html = '<button class="btn btn-xs archive-del-btn" id="archiveDetailDelBtn" style="position:fixed;top:14px;left:14px;z-index:1301;" onclick="deleteArchiveFromDetail()">🗑 删除档案</button>';
  html += '<button class="btn btn-xs archive-back-btn" id="archiveDetailBackBtn" style="position:fixed;top:14px;right:14px;z-index:1301;" onclick="closeArchiveDetail()">← 返回</button>';
  html += '<div class="archive-detail-view" id="archivePopContent"></div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

function renderArchiveDetailModal() {
  var content = document.getElementById('archivePopContent');
  if (!content) return;
  var d = _archiveDetail;
  if (!d) return;
  var entry = d.entry;
  var dots = d.pages.map(function(_, i) { return '<span class="' + (i === d.index ? 'on' : '') + '"></span>'; }).join('');
  var html = '<div class="archive-detail-stage" id="archiveDetailStage">';
  html += '<button class="archive-detail-arrow" onclick="archiveDetailMove(-1)">‹</button>';
  html += '<img id="archiveDetailImg" class="archive-detail-img" src="' + d.pages[d.index] + '" alt="生涯海报">';
  html += '<button class="archive-detail-arrow" onclick="archiveDetailMove(1)">›</button>';
  html += '</div>';
  html += '<div class="archive-detail-dots">' + dots + '</div>';
  html += '<div class="archive-detail-note">' + (typeof getArchiveEntryName === 'function' ? getArchiveEntryName(entry) : (entry.name || '自建球员')) + ' · 左右滑动或点击箭头切换海报</div>';
  content.innerHTML = html;
  var stage = document.getElementById('archiveDetailStage');
  if (stage) {
    var startX = 0;
    stage.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function(e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) archiveDetailMove(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
}

function archiveDetailMove(delta) {
  var d = _archiveDetail;
  if (!d || !d.pages.length) return;
  d.index = (d.index + delta + d.pages.length) % d.pages.length;
  var img = document.getElementById('archiveDetailImg');
  if (img) img.src = d.pages[d.index];
  var dots = document.querySelectorAll('#archivePopContent .archive-detail-dots span');
  dots.forEach(function(dot, i) { dot.classList.toggle('on', i === d.index); });
}

function closeArchiveDetail() {
  var view = document.getElementById('archivePopContent');
  if (view) view.remove();
  var back = document.getElementById('archiveDetailBackBtn');
  if (back) back.remove();
  var del = document.getElementById('archiveDetailDelBtn');
  if (del) del.remove();
  _archiveDetail = null;
}

function deleteArchiveFromDetail() {
  var d = _archiveDetail;
  if (!d || !d.entry) return;
  var gameId = d.entry.gameId || '';
  closeArchiveDetail();
  deleteArchiveEntryByGameId(gameId);
}

function findArchiveByGameId(gameId) {
  var list = loadCareerArchive();
  for (var i = 0; i < list.length; i++) { if (list[i] && list[i].gameId === gameId) return i; }
  return -1;
}
function viewArchiveEntryByGameId(gameId) {
  var idx = findArchiveByGameId(gameId);
  if (idx < 0) return;
  var list = loadCareerArchive();
  // ★ 只读查看：不写入 STATE，避免毁掉当前进行中的游戏
  showArchiveReadonlyCareerView(list[idx]);
}
function deleteArchiveEntryByGameId(gameId) {
  var idx = findArchiveByGameId(gameId);
  if (idx < 0) return;
  deleteArchiveEntry(idx);
  var m = document.getElementById('archive-detail-modal');
  if (m) m.remove();
  renderArchiveLibrary();
}

/** 归档生涯效力过的球队（按赛季去重） */
function archiveTeamCodes(a) {
  var out = [];
  try {
    var ss = (a && a.career && a.career.seasons) || [];
    ss.forEach(function(s) { if (s && s.team && out.indexOf(s.team) < 0) out.push(s.team); });
  } catch(e) {}
  return out;
}
