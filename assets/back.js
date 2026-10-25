// Adds a small "← Mục lục" link back to the catalogue on every page. Hidden when printing.
(function(){
  var a=document.createElement('a');
  a.href='../';a.textContent='← Mục lục';a.className='tp-back';
  var s=document.createElement('style');
  s.textContent='.tp-back{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));z-index:9999;'+
    'font:600 13px/1 "Be Vietnam Pro",system-ui,sans-serif;color:#173736;background:rgba(255,255,255,.92);border:1px solid #d3e0da;'+
    'padding:8px 12px;border-radius:999px;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.12)}.tp-back:hover{border-color:#2f7d8a}'+
    '@media print{.tp-back{display:none!important}}';
  document.head.appendChild(s);document.body.appendChild(a);
})();
