// Adds a small "← Mục lục" link back to the catalogue on every page. Hidden when printing.
// When framed (Tomoe desktop app): no link, reports its URL to the parent, and prints on request.
(function(){
  var framed=window.parent!==window;
  if(!framed){
  var a=document.createElement('a');
  a.href='../';a.textContent='← Mục lục';a.className='tp-back';
  var s=document.createElement('style');
  s.textContent='.tp-back{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));z-index:9999;'+
    'font:600 13px/1 "Be Vietnam Pro",system-ui,sans-serif;color:#173736;background:rgba(255,255,255,.92);border:1px solid #d3e0da;'+
    'padding:8px 12px;border-radius:999px;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.12)}.tp-back:hover{border-color:#2f7d8a}'+
    '@media print{.tp-back{display:none!important}}';
  document.head.appendChild(s);document.body.appendChild(a);
  }
  // fallback favicon for pages that don't declare one in <head>
  if(!document.querySelector('link[rel~="icon"]')){
    var i=document.createElement('link');
    i.rel='icon';i.type='image/svg+xml';i.href='../assets/logo-tomoe-t.svg';
    document.head.appendChild(i);
  }
  if(framed){
    var report=function(){try{window.parent.postMessage({tomoe:'page',url:location.href},'*');}catch(x){}};
    ['replaceState','pushState'].forEach(function(m){
      var orig=history[m];
      history[m]=function(){var r=orig.apply(this,arguments);report();return r;};
    });
    window.addEventListener('message',function(e){
      if(e.source===window.parent&&e.data&&e.data.tomoe==='print')window.print();
    });
    window.addEventListener('keydown',function(e){
      if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&!e.altKey&&(e.key==='p'||e.key==='P'||e.code==='KeyP')){e.preventDefault();window.print();}
    });
    report();
  }
})();
