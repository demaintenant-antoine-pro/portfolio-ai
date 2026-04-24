// ========== PROFILE SELECTOR + MATRIX RAIN ==========

/* ═══════════ PROFILE SELECTOR — Matrix ═══════════ */
var PS_LANG = 'en';
var PS_LABELS = {
  en: { q: '// ready to explore', enter: 'Enter portfolio →' },
  fr: { q: '// prêt à explorer',  enter: 'Lancer le portfolio →' }
};

function psSetLang(l){
  PS_LANG = l;
  var fr = document.getElementById('ps-fr');
  var en = document.getElementById('ps-en');
  if(fr) fr.classList.toggle('active', l==='fr');
  if(en) en.classList.toggle('active', l==='en');
  psRender();
}
function psRender(){
  var lb = PS_LABELS[PS_LANG];
  var q = document.getElementById('ps-q');
  var lbl = document.getElementById('ps-enter-lbl');
  if(q) q.textContent = lb.q;
  if(lbl) lbl.textContent = lb.enter;
}

/* Matrix rain */
(function(){
  var canvas = document.getElementById('ps-matrix');
  if(!canvas) return;
  // Skip on reduced-motion preference
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    canvas.style.display = 'none';
    return;
  }
  var ctx = canvas.getContext('2d');
  function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
  resize(); window.addEventListener('resize', resize);
  var cols = Math.floor(innerWidth/20);
  var drops = Array(cols).fill(1);
  var chars = '0123456789ABCDEFabcdef#@!$%&アイウエオカキクケコ';
  function draw(){
    ctx.fillStyle='rgba(0,0,0,.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font='14px Space Mono,monospace';
    for(var i=0;i<drops.length;i++){
      var c=chars[Math.floor(Math.random()*chars.length)];
      var alpha=Math.random()>.85?1:.3;
      ctx.fillStyle='rgba(65,90,119,'+alpha+')';
      ctx.fillText(c,i*20,drops[i]*20);
      if(drops[i]*20>canvas.height && Math.random()>.975) drops[i]=0;
      drops[i]++;
    }
  }
  var raf;
  function tick(){ raf=requestAnimationFrame(tick); draw(); }
  tick();
  window._stopMatrix=function(){ cancelAnimationFrame(raf); };
})();

function psChoose(mode){
  window._psLang = PS_LANG;
  if(window._stopMatrix) window._stopMatrix();
  var overlay = document.getElementById('ps-overlay');
  overlay.classList.add('hide');
  setTimeout(function(){ if(overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 900);

  if(mode === 'tech'){
    document.body.setAttribute('data-theme', 'dark');
    window._psBootPending = true;
    window._psMode = mode;
    var boot = document.getElementById('boot');
    boot.style.display = 'flex';
    psBoot();
  } else {
    document.body.setAttribute('data-theme', 'light');
    window._psMode = mode;
    document.body.classList.add('human-mode');
    window.dispatchEvent(new CustomEvent('psChosen', { detail: { mode: mode, lang: PS_LANG } }));
  }
}

psRender();

/* ═══════════ BOOT (tech only) ═══════════ */
function psBoot(){
  var lines = ['> INITIALIZING ADM.SYS v5.0...','> LOADING NEURAL INTERFACE...','> MOUNTING DATA PIPELINES... OK','> CONNECTING AUTOMATION ENGINE... OK','> SPAWNING PARTICLE SYSTEM... OK','> READY.'];
  var container = document.getElementById('boot-lines');
  var bar = document.getElementById('boot-bar');
  var i = 0;
  function showLine(){
    if (i >= lines.length){
      setTimeout(function(){
        var boot = document.getElementById('boot');
        if(boot){ boot.style.opacity = '0'; setTimeout(function(){ if(boot.parentNode) boot.parentNode.removeChild(boot); window._psBootPending = false; window.dispatchEvent(new CustomEvent('psChosen', { detail: { mode: 'tech', lang: window._psLang } })); }, 600); }
      }, 300); return;
    }
    var d = document.createElement('div'); d.className = 'boot-line'; d.textContent = lines[i]; container.appendChild(d);
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ d.classList.add('show'); }); });
    bar.style.width = ((i+1)/lines.length*100) + '%';
    i++;
    setTimeout(showLine, i === lines.length ? 100 : 260);
  }
  setTimeout(showLine, 200);
}

/* ═══════════ CURSOR ═══════════ */
const co=document.getElementById('cur-o'),ci=document.getElementById('cur-i');
let mx=0,my=0,ox=0,oy=0;
let _heroH1=null;

// Single unified mousemove handler (was 3 separate)
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  // Inner dot tracks instantly
  ci.style.left=mx+'px';ci.style.top=my+'px';
  // Hero parallax
  if(!_heroH1)_heroH1=document.querySelector('.hero-h1');
  if(_heroH1){
    const dx=(e.clientX-innerWidth/2)/innerWidth,dy=(e.clientY-innerHeight/2)/innerHeight;
    _heroH1.style.transform=`translate(${dx*16}px,${dy*9}px)`;
  }
  // Three.js mouseX/mouseY (read by animate loop)
  if(window._threeMouseX!==undefined){window._threeMouseX=(e.clientX/innerWidth-.5)*2;window._threeMouseY=-(e.clientY/innerHeight-.5)*2;}
},{passive:true});

// Outer ring: smooth lerp RAF — faster lerp = .18 (was .12 = too laggy/flickery)
(function anim(){
  ox+=(mx-ox)*.18;oy+=(my-oy)*.18;
  co.style.left=ox+'px';co.style.top=oy+'px';
  requestAnimationFrame(anim);
})();

document.addEventListener('mouseover',e=>{
  if(e.target.closest('a,button,[role=button]'))document.body.classList.add('hovering');
  else document.body.classList.remove('hovering');
});

/* ═══════════ THREE.JS SPHERE — REMOVED (distracting + perf cost on desktop) ═══════════ */
{
  const c = document.getElementById('three-canvas');
  if(c) c.style.display = 'none';
}

/* ═══════════ TICKERS — single JS engine: transform-driven scroll + drag/swipe ═══════════ */
/* One requestAnimationFrame loop computes position from elapsed time and applies
   it via translate3d. Drag overrides the position. No CSS animation, no scrollLeft,
   no sub-pixel rounding bugs. Resume after drag rewinds animStartTime so the
   animation continues from the dropped position with zero jump. */
(function(){
  const DURATION = {
    'stack-ticker-wrap': 55,
    'countries-ticker-wrap': 60,
    'testi-ticker-wrap': 75,
    'cert-featured-ticker-wrap': 50,
    'cert-secondary-ticker-wrap': 45,
    'projects-ticker-wrap': 65,
  };
  const SELECTORS = Object.keys(DURATION).map(c => '.' + c);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function wire(wrap){
    if(!wrap||wrap._wired)return;
    wrap._wired=true;
    const ticker = wrap.firstElementChild;
    if(!ticker)return;

    const dur = (DURATION[Object.keys(DURATION).find(c => wrap.classList.contains(c))] || 60) * 1000; // ms

    let animStart = performance.now();
    let dragging = false;
    let dragStartClientX = 0;
    let dragBaseX = 0;
    let dragCurX = 0;
    let inView = true;
    let moved = 0;
    // Touch direction filter
    let tStartX = 0, tStartY = 0, tHoriz = false;

    function autoX(now){
      const halfW = ticker.scrollWidth / 2;
      if(halfW <= 0) return 0;
      const elapsed = now - animStart;
      let ratio = (elapsed % dur) / dur;
      if(ratio < 0) ratio += 1;
      return -ratio * halfW;
    }

    function tick(now){
      requestAnimationFrame(tick);
      if(reducedMotion || document.hidden) return;
      let x;
      if(dragging){
        x = dragCurX;
      } else if(!inView){
        return; // skip rendering when off-screen, but resume from current point
      } else {
        x = autoX(now);
      }
      ticker.style.transform = `translate3d(${x}px,0,0)`;
    }
    requestAnimationFrame(tick);

    // Off-screen pause: keep animStart aligned so coming back doesn't jump
    let lastVisibleX = 0;
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(([e]) => {
        if(!e.isIntersecting && inView){
          // Going off-screen — remember current x
          lastVisibleX = autoX(performance.now());
          inView = false;
        } else if(e.isIntersecting && !inView){
          // Coming back — back-date animStart to resume from lastVisibleX
          const halfW = ticker.scrollWidth / 2;
          if(halfW > 0){
            let n = lastVisibleX % halfW;
            if(n > 0) n -= halfW;
            const ratio = -n / halfW;
            animStart = performance.now() - ratio * dur;
          }
          inView = true;
        }
      }, {rootMargin: '200px'});
      io.observe(wrap);
    }

    function startDrag(clientX){
      dragging = true;
      moved = 0;
      dragStartClientX = clientX;
      dragBaseX = autoX(performance.now());
      dragCurX = dragBaseX;
      wrap.classList.add('grabbing');
    }
    function moveDrag(clientX){
      const dx = clientX - dragStartClientX;
      moved = Math.abs(dx);
      dragCurX = dragBaseX + dx;
    }
    function endDrag(){
      if(!dragging) return;
      dragging = false;
      wrap.classList.remove('grabbing');
      // Resume auto from current dragCurX
      const halfW = ticker.scrollWidth / 2;
      if(halfW > 0){
        let n = dragCurX % halfW;
        if(n > 0) n -= halfW;
        const ratio = -n / halfW; // [0..1]
        animStart = performance.now() - ratio * dur;
      }
      // Block the click that follows a real drag
      if(moved > 6){
        const blk = ev => { ev.preventDefault(); ev.stopPropagation(); wrap.removeEventListener('click', blk, true); };
        wrap.addEventListener('click', blk, true);
        setTimeout(() => wrap.removeEventListener('click', blk, true), 50);
      }
    }

    // ─── Mouse drag (desktop) — pointer events for non-touch only ───
    // Defer startDrag + setPointerCapture until real horizontal movement.
    // Capturing the pointer on pointerdown redirects the synthesised click
    // away from nested buttons (e.g. "Read full", country cards, project
    // links), so simple clicks were being swallowed. Now a click with zero
    // movement never captures the pointer and propagates normally.
    let pDown = false, pStartX = 0, pPointerId = null;
    wrap.addEventListener('pointerdown', e => {
      if(e.pointerType === 'touch') return; // touch path below handles direction filter
      pDown = true;
      pStartX = e.clientX;
      pPointerId = e.pointerId;
    });
    wrap.addEventListener('pointermove', e => {
      if(e.pointerType === 'touch') return;
      if(pDown && !dragging){
        if(Math.abs(e.clientX - pStartX) > 6){
          startDrag(pStartX);
          try { wrap.setPointerCapture(pPointerId); } catch(_){}
        } else {
          return;
        }
      }
      if(!dragging) return;
      moveDrag(e.clientX);
    });
    function mouseUp(){ pDown = false; endDrag(); }
    wrap.addEventListener('pointerup', mouseUp);
    wrap.addEventListener('pointercancel', mouseUp);
    wrap.addEventListener('pointerleave', mouseUp);

    // ─── Touch (mobile) — only horizontal swipes, vertical passes through ───
    wrap.addEventListener('touchstart', e => {
      const t = e.touches[0];
      tStartX = t.clientX; tStartY = t.clientY; tHoriz = false;
    }, {passive: true});
    wrap.addEventListener('touchmove', e => {
      const t = e.touches[0];
      if(!tHoriz){
        const dx = Math.abs(t.clientX - tStartX);
        const dy = Math.abs(t.clientY - tStartY);
        if(dx > 8 && dx > dy){
          tHoriz = true;
          startDrag(tStartX); // start from initial finger pos to keep delta consistent
        } else {
          return;
        }
      }
      moveDrag(t.clientX);
    }, {passive: true});
    function endTouch(){
      if(tHoriz) endDrag();
      tHoriz = false;
    }
    wrap.addEventListener('touchend', endTouch, {passive: true});
    wrap.addEventListener('touchcancel', endTouch, {passive: true});
  }

  function bootAll(){ SELECTORS.forEach(sel => document.querySelectorAll(sel).forEach(wire)); }

  // React mounts these inside #root after first paint — poll briefly + observe DOM.
  bootAll();
  let tries = 0;
  const poll = setInterval(() => { bootAll(); if(++tries > 40) clearInterval(poll); }, 250);
  if('MutationObserver' in window){
    new MutationObserver(() => bootAll()).observe(document.body, {childList: true, subtree: true});
  }
})();

/* ═══════════ SCROLL PROGRESS ═══════════ */
window.addEventListener('scroll',()=>{
  const d=document.documentElement;
  const pct=d.scrollTop/(d.scrollHeight-d.clientHeight)*100;
  document.getElementById('sbar').style.width=pct+'%';
  document.getElementById('hire-fill').style.width=pct+'%';
});

/* ═══════════ 8-BIT SOUND ENGINE ═══════════ */
const SFX={
  on:false,
  ctx:null,
  init(){if(!this.ctx)this.ctx=new(window.AudioContext||window.webkitAudioContext)();},
  play(freq,dur,type='square',vol=.08){
    if(!this.on)return;
    try{this.init();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.connect(g);g.connect(this.ctx.destination);o.type=type;o.frequency.setValueAtTime(freq,this.ctx.currentTime);g.gain.setValueAtTime(vol,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+dur);o.start();o.stop(this.ctx.currentTime+dur);}catch(e){}
  },
  click(){this.play(440,.06,'square',.06);},
  hover(){this.play(660,.04,'square',.03);},
  success(){[523,659,784].forEach((f,i)=>setTimeout(()=>this.play(f,.12,'square',.07),i*80));},
  error(){[220,196,.15,'sawtooth',.1].slice(0,3).forEach((f,i)=>typeof f==='number'&&setTimeout(()=>this.play(f,.18,'sawtooth',.09),i*60));},
  achieve(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.play(f,.1,'square',.08),i*60));},
  toggle(){this.on=!this.on;if(this.on){this.init();this.success();}return this.on;}
};
window.SFX=SFX;
document.addEventListener('click',e=>{if(e.target.closest('button,a,.exp-nav-item,.skill-card,.stack-card,.blog-card,.cal-day,.cal-slot'))SFX.click();});
document.addEventListener('mouseover',e=>{if(e.target.closest('.btn-primary,.btn-secondary,.nav-link,.run-btn,.recruiter-option'))SFX.hover();});

/* hero parallax now handled in unified mousemove above */

/* ═══════════ XP SYSTEM ═══════════ */
const XP={
  points:0,
  sections:{},
  achievements:[
    {id:'first_scroll',pts:50,icon:'👀',title:'First Contact',trigger:'dashboard'},
    {id:'pipeline_run',pts:100,icon:'⚡',title:'Pipeline Runner',trigger:'pipeline_run'},
    {id:'recruiter',pts:200,icon:'🎯',title:'Smart Recruiter',trigger:'recruiter_mode'},
    {id:'terminal_cmd',pts:75,icon:'💻',title:'Terminal Wizard',trigger:'terminal_cmd'},
    {id:'halfway',pts:150,icon:'🚀',title:'Deep Dive',trigger:'roi'},
    {id:'contact',pts:250,icon:'📧',title:'Ready to Hire',trigger:'contact'},
    {id:'konami',pts:500,icon:'🕹️',title:'Konami Master',trigger:'konami'},
    {id:'drag_fail',pts:25,icon:'😅',title:'Wrong Order LOL',trigger:'drag_fail'},
    {id:'full_scroll',pts:300,icon:'🏆',title:'Full Scroll',trigger:'blog'},
  ],
  unlocked:new Set(),
  earn(trigger){
    const ach=this.achievements.find(a=>a.trigger===trigger&&!this.unlocked.has(a.id));
    if(ach){
      this.unlocked.add(ach.id);
      this.points+=ach.pts;
      this.update();
      this.showAchievement(ach);
    }
    // section bonus
    if(!this.sections[trigger]){
      this.sections[trigger]=true;
      this.points+=20;
      this.update();
    }
  },
  update(){
    const max=1775;
    const pct=Math.min(this.points/max*100,100);
    const lv=Math.floor(this.points/200)+1;
    document.getElementById('xp-pts').textContent=this.points+' XP';
    document.getElementById('xp-bar').style.width=((this.points%200)/200*100)+'%';
    document.getElementById('xp-level').textContent='LV.'+lv;
    document.getElementById('xp-label').textContent=this.unlocked.size+'/'+this.achievements.length+' achievements';
  },
  showAchievement(ach){
    const t=document.getElementById('achieve-toast');
    document.getElementById('achieve-icon').textContent=ach.icon;
    document.getElementById('achieve-title').textContent=ach.title+' +'+ach.pts+'XP';
    t.classList.add('show');
    window.SFX&&SFX.achieve();
    setTimeout(()=>t.classList.remove('show'),3200);
  }
};
window.XP=XP;

/* ═══════════ KONAMI ═══════════ */
(function(){const s=[38,38,40,40,37,39,37,39,66,65];let p=0;document.addEventListener('keydown',e=>{e.keyCode===s[p]?p++:p=0;if(p===s.length){p=0;window.konamiCb&&window.konamiCb();XP.earn('konami');}});})();



// ========== VISITOR TRACKER ==========

(function() {
  if (sessionStorage.getItem("tracked")) return;
  sessionStorage.setItem("tracked", "1");

  var WORKER_URL = "https://dm_antoine--a8211e3c18ee11f18d2742dde27851f2.web.val.run";
  if (navigator.webdriver) return;

  // Détection OS
  var ua = navigator.userAgent;
  var os = "Inconnu";
  if (/iPhone|iPad/.test(ua)) os = "iOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/Mac/.test(ua)) os = "macOS";
  else if (/Windows/.test(ua)) os = "Windows";
  else if (/Linux/.test(ua)) os = "Linux";

  // Tracking des clics sur boutons importants
  var clicks = [];
  document.querySelectorAll("a, button").forEach(function(el) {
    el.addEventListener("click", function() {
      var label = el.innerText.trim().substring(0, 30);
      if (label && !clicks.includes(label)) clicks.push(label);
    });
  });

  // Tracking scroll depth
    var maxScroll = 0;
  window.addEventListener("scroll", function() {
    var scrolled = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
    if (scrolled > maxScroll) maxScroll = scrolled;
  });

  // Notif d'arrivée — on capture le count réel retourné par le worker
  fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "arrive",
      os: os,
      lang: navigator.language,
      ref: document.referrer || "Direct"
    })
  }).then(function(r){ return r.json(); })
    .then(function(data){
      if(data && typeof data.count === "number"){
        window.__realVisitCount = data.count;
        try { sessionStorage.setItem("__visitCount", data.count); } catch(e){}
        window.dispatchEvent(new CustomEvent("workerCount", { detail: data.count }));
      }
    })
    .catch(function(){});

  // Notif de départ avec temps passé + clics + scroll
  var start = Date.now();
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
      var seconds = Math.round((Date.now() - start) / 1000);
      var minutes = Math.floor(seconds / 60);
      var secs = seconds % 60;
      var duration = minutes + "min " + secs + "sec";

      var blob = new Blob([JSON.stringify({
        type: "leave",
        duration: duration,
        clicks: clicks,
        scroll: maxScroll + "%"
      })], { type: "application/json" });

      navigator.sendBeacon(WORKER_URL, blob);
    }
  });
})();
