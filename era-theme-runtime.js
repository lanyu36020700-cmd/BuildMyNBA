/* ============================================================
   Era Theme Runtime — 时代主题切换 + 冠军光谱庆祝强调色
   纯视觉层：只改 body[data-era] 与弹窗 CSS 变量，不影响逻辑
   ============================================================ */
(function () {
  // 冠军光谱：赛季年份 -> 该年真实冠军球队主色 [A, B]
  // 用于夺冠/60胜/全99/生涯之夜/爆炸赛季弹窗顶部强调线
  var CHAMPION_SPECTRUM = {
    1984:['#552583','#FDB927'], 1985:['#552583','#FDB927'], 1986:['#007A33','#BA9653'],
    1987:['#552583','#FDB927'], 1988:['#552583','#FDB927'], 1989:['#1D428A','#C8102E'],
    1990:['#1D428A','#C8102E'], 1991:['#CE1141','#000000'], 1992:['#CE1141','#000000'],
    1993:['#CE1141','#000000'], 1994:['#CE1141','#FDB927'], 1995:['#CE1141','#FDB927'],
    1996:['#CE1141','#000000'], 1997:['#CE1141','#000000'], 1998:['#CE1141','#000000'],
    1999:['#C4CED4','#061922'], 2000:['#552583','#FDB927'], 2001:['#552583','#FDB927'],
    2002:['#552583','#FDB927'], 2003:['#C4CED4','#061922'], 2004:['#1D428A','#C8102E'],
    2005:['#C4CED4','#061922'], 2006:['#98002E','#F9A01B'], 2007:['#C4CED4','#061922'],
    2008:['#007A33','#BA9653'], 2009:['#552583','#FDB927'], 2010:['#552583','#FDB927'],
    2011:['#00538C','#B8C4CA'], 2012:['#98002E','#000000'], 2013:['#98002E','#000000'],
    2014:['#C4CED4','#061922'], 2015:['#FFC72C','#1D428A'], 2016:['#860038','#FDBB30'],
    2017:['#FFC72C','#1D428A'], 2018:['#FFC72C','#1D428A'], 2019:['#CE1141','#000000'],
    2020:['#552583','#FDB927'], 2021:['#00471B','#EEE1C6'], 2022:['#FFC72C','#1D428A'],
    2023:['#0E2240','#FEC524'], 2024:['#007A33','#BA9653'], 2025:['#007AC1','#EF3B24']
  };
  window.CHAMPION_SPECTRUM = CHAMPION_SPECTRUM;

  function eraYear() {
    try {
      if (typeof getCurrentSeasonYear === 'function') return parseInt(getCurrentSeasonYear(), 10) || 0;
    } catch (e) {}
    try {
      if (STATE && STATE.draftMode === 'historical' && STATE.eraStart) {
        var sc = (STATE.career && STATE.career.seasonCount) || 0;
        return (parseInt(STATE.eraStart, 10) || 0) + sc;
      }
    } catch (e) {}
    return 2025;
  }

  // 设置 body[data-era]：现代删除属性；历史按赛季年份演化
  window.setEraTheme = function () {
    var era = '';
    try {
      var isH = STATE && STATE.draftMode === 'historical';
      if (isH) {
        var y = eraYear();
        if (y < 1996) era = '1984';
        else if (y < 2003) era = '1996';
        else if (y < 2025) era = '2003';
        else era = '';
      }
    } catch (e) {}
    if (era) document.body.setAttribute('data-era', era);
    else document.body.removeAttribute('data-era');
  };

  // 给庆祝弹窗设置冠军光谱强调色
  function applySpectrum(node) {
    var y = eraYear();
    var colors = CHAMPION_SPECTRUM[y] || ['#EF3B24', '#FFC72C'];
    node.style.setProperty('--celebrate-a', colors[0]);
    node.style.setProperty('--celebrate-b', colors[1]);
  }

  // 自动监听新增的庆祝弹窗，免改各弹窗函数
  function startObserver() {
    if (!document.body) { setTimeout(startObserver, 100); return; }
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (!m.addedNodes) return;
        m.addedNodes.forEach(function (n) {
          if (n && n.nodeType === 1 && n.matches &&
              n.matches('.champion-celebration-overlay, .sixty-win-overlay, .all99-overlay, .career-night-overlay')) {
            applySpectrum(n);
          }
        });
      });
    }).observe(document.body, { childList: true });
    setEraTheme();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startObserver);
  else startObserver();
})();
