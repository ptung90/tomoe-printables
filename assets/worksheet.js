// Shared engine for printable worksheet generators.
// A page calls Worksheet({ title, intro, kicker, options, build }) and gets: option chips, a seeded
// "Xáo đề" button, a shareable mã đề in the URL, A4 pages with an optional answer key, and printing.
// build(state, rng, ws) returns [{ html, answer }] — one item per A4 page.
(function () {
  'use strict';

  function mulberry(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function makeRng(seed) {
    var r = mulberry(seed);
    var rng = function () { return r(); };
    rng.int = function (a, b) { return a + Math.floor(r() * (b - a + 1)); };
    rng.pick = function (arr) { return arr[Math.floor(r() * arr.length)]; };
    rng.chance = function (p) { return r() < p; };
    rng.shuffle = function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    };
    return rng;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function newSeed() { return 1000 + Math.floor(Math.random() * 98999); }

  // the school's "T" sprout, top-right of every worksheet header; resolved next to this script
  var LOGO = '<img class="ws-logo" alt="TOMOE" src="' + new URL('logo-tomoe-t.svg', document.currentScript.src).href + '">';

  // helpers handed to build()
  var ws = {
    esc: esc,
    // standard worksheet header: kicker line, title, name + date lines
    head: function (kicker, title) {
      return '<header class="ws-head">' + LOGO + '<div class="kicker">' + esc(kicker) + '</div><h2>' + esc(title) + '</h2>' +
        '<div class="who"><span>Họ và tên: ………………………………………………………</span><span>Ngày: ………………………</span></div></header>';
    },
    answerHead: function (kicker, title) {
      return '<header class="ws-head">' + LOGO + '<div class="kicker">' + esc(kicker) + '</div><h2>' + esc(title) + '</h2></header>';
    },
    letters: 'abcdefghijklmnopqrstuvwxyz'.split('')
  };

  window.Worksheet = function (cfg) {
    var options = (cfg.options || []).concat([{ key: 'ans', label: 'Đáp án', items: [['0', 'Không in đáp án'], ['1', 'Kèm đáp án']], def: '0' }]);
    var state = {}, seed;
    options.forEach(function (o) { state[o.key] = String(o.def); });
    try {
      var q = new URLSearchParams(location.search);
      options.forEach(function (o) {
        var v = q.get(o.key);
        if (v != null && o.items.some(function (it) { return String(it[0]) === v; })) state[o.key] = v;
      });
      seed = parseInt(q.get('s'), 10);
    } catch (e) {}
    if (!(seed > 0)) seed = newSeed();

    // ---- build the screen UI ----
    var ui = document.createElement('div');
    ui.className = 'ws-ui';
    ui.innerHTML = '<header><h1>' + esc(cfg.title) + '</h1>' + (cfg.intro ? '<p>' + cfg.intro + '</p>' : '') + '</header>' +
      '<section class="ws-panel" aria-label="Tuỳ chọn"></section>';
    var panel = ui.querySelector('.ws-panel');
    options.forEach(function (o) {
      var row = document.createElement('div');
      row.className = 'ws-row';
      row.innerHTML = '<span class="lab">' + esc(o.label) + '</span>';
      o.items.forEach(function (it) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'ws-chip'; b.textContent = it[1]; b.dataset.k = o.key; b.dataset.v = String(it[0]);
        b.addEventListener('click', function () { state[o.key] = b.dataset.v; render(); });
        row.appendChild(b);
      });
      panel.appendChild(row);
    });
    var actions = document.createElement('div');
    actions.className = 'ws-actions';
    actions.innerHTML = '<button type="button" class="ws-btn" data-act="shuffle">Xáo đề</button>' +
      '<button type="button" class="ws-btn ghost" data-act="print">In / Lưu PDF</button>' +
      '<span class="ws-status" aria-live="polite"></span>';
    panel.appendChild(actions);
    var status = actions.querySelector('.ws-status');
    var sheets = document.createElement('main');
    sheets.className = 'ws-sheets';
    document.body.insertBefore(sheets, document.body.firstChild);
    document.body.insertBefore(ui, sheets);

    actions.querySelector('[data-act="shuffle"]').addEventListener('click', function () { seed = newSeed(); render(); });
    actions.querySelector('[data-act="print"]').addEventListener('click', function () { window.print(); });

    function fit() {
      var z = Math.min(1, (document.documentElement.clientWidth - 32) / (210 * 96 / 25.4));
      sheets.style.zoom = z < 1 ? String(Math.round(z * 1000) / 1000) : '';
    }
    window.addEventListener('resize', fit);

    function render() {
      ui.querySelectorAll('.ws-chip').forEach(function (b) { b.setAttribute('aria-pressed', String(state[b.dataset.k] === b.dataset.v)); });
      var pages = cfg.build(state, makeRng(seed), ws).filter(function (p) { return state.ans === '1' || !p.answer; });
      var foot = '<div class="foot"><span>Tiểu học TOMOE · ' + esc(cfg.kicker || cfg.title) + '</span><span>Mã đề ' + seed + '</span></div>';
      sheets.innerHTML = pages.map(function (p) {
        return '<section class="page' + (p.answer ? ' answer' : '') + '">' + p.html + foot + '</section>';
      }).join('');
      fit();
      var over = [].filter.call(sheets.querySelectorAll('.page'), function (pg) {
        pg.classList.remove('overflow');
        if (pg.scrollHeight > pg.clientHeight + 2) { pg.classList.add('overflow'); return true; }
        return false;
      });
      status.innerHTML = 'Mã đề <b>' + seed + '</b> · ' + pages.length + ' trang A4' +
        (over.length ? ' · <span class="warn">' + over.length + ' trang bị tràn, hãy giảm số bài</span>' : '');
      try {
        var q = new URLSearchParams();
        options.forEach(function (o) { if (state[o.key] !== String(o.def)) q.set(o.key, state[o.key]); });
        q.set('s', seed);
        history.replaceState(null, '', location.pathname + '?' + q);
      } catch (e) {}
    }

    render();
    // re-check overflow once web fonts have arrived (metrics change)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(render);
  };
})();
