
/* ============================================================
   PRELOADER
============================================================ */
(function(){
  const bar = document.getElementById('pre-bar');
  const loader = document.getElementById('preloader');
  let w = 0;
  const iv = setInterval(()=>{
    w += Math.random()*18;
    if(w>=100){w=100;clearInterval(iv);setTimeout(()=>loader.classList.add('hide'),400)}
    bar.style.width=w+'%';
  },90);
})();

/* ============================================================
   CUSTOM CURSOR
============================================================ */
<<<<<<< HEAD
// const cur = document.getElementById('cursor');
// const ring = document.getElementById('cursor-ring');
// let mx=0,my=0,rx=0,ry=0;
// document.addEventListener('mousemove',e=>{
//   mx=e.clientX; my=e.clientY;
//   cur.style.left=mx+'px'; cur.style.top=my+'px';
// });
// (function animRing(){
//   rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
//   ring.style.left=rx+'px'; ring.style.top=ry+'px';
//   requestAnimationFrame(animRing);
// })();
// document.querySelectorAll('a,button,[class*="card"],[class*="btn"]').forEach(el=>{
//   el.addEventListener('mouseenter',()=>{
//     cur.style.width='22px'; cur.style.height='22px';
//     ring.style.width='60px'; ring.style.height='60px';
//     ring.style.opacity='0.3';
//   });
//   el.addEventListener('mouseleave',()=>{
//     cur.style.width='14px'; cur.style.height='14px';
//     ring.style.width='42px'; ring.style.height='42px';
//     ring.style.opacity='0.5';
//   });
// });
=======
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,[class*="card"],[class*="btn"]').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cur.style.width='22px'; cur.style.height='22px';
    ring.style.width='60px'; ring.style.height='60px';
    ring.style.opacity='0.3';
  });
  el.addEventListener('mouseleave',()=>{
    cur.style.width='14px'; cur.style.height='14px';
    ring.style.width='42px'; ring.style.height='42px';
    ring.style.opacity='0.5';
  });
});
>>>>>>> ashwani-work

/* ============================================================
   PARTICLES
============================================================ */
<<<<<<< HEAD
(function () {

  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  let W, H;
  let particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  const isDark = () =>
    document.documentElement.getAttribute('data-theme') !== 'light';

  class Particle {

    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;

      this.size = Math.random() * 1.6 + 0.3;

      this.speedX = (Math.random() - 0.5) * 0.18;
      this.speedY = (Math.random() - 0.5) * 0.18;

      this.opacity = Math.random() * 0.18 + 0.05;
    }

    update() {

      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;

      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }

    draw() {

      const colors = isDark()
        ? {
            particle: '0,220,255',
            line: '0,220,255'
          }
        : {
            particle: '130,140,180',
            line: '160,170,200'
          };

      // glow
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.size * 5
      );

      gradient.addColorStop(
        0,
        `rgba(${colors.particle},${this.opacity})`
      );

      gradient.addColorStop(
        1,
        `rgba(${colors.particle},0)`
      );

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2);
      ctx.fill();

      // center particle
      ctx.beginPath();

      ctx.fillStyle = isDark()
        ? 'rgba(0,220,255,0.7)'
        : 'rgba(120,130,170,0.45)';

      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      ctx.fill();
    }
  }

  // particles
  for (let i = 0; i < 85; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {

    const colors = isDark()
      ? {
          line: '0,220,255'
        }
      : {
          line: '160,170,200'
        };

    for (let a = 0; a < particles.length; a++) {

      for (let b = a; b < particles.length; b++) {

        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;

        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {

          const opacity = (1 - dist / 110) * 0.06;

          ctx.beginPath();

          ctx.strokeStyle =
            `rgba(${colors.line},${opacity})`;

          ctx.lineWidth = 0.45;

          ctx.moveTo(
            particles[a].x,
            particles[a].y
          );

          ctx.lineTo(
            particles[b].x,
            particles[b].y
          );

          ctx.stroke();
        }
      }
    }
  }

  function animate() {

    ctx.clearRect(0, 0, W, H);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    connectParticles();

    requestAnimationFrame(animate);
  }

  animate();

})();
=======
(function(){
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W,H,particles=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
  resize(); window.addEventListener('resize',resize);
  const isDark=()=>document.documentElement.getAttribute('data-theme')!=='light';
  function Particle(){
    this.x=Math.random()*W; this.y=Math.random()*H;
    this.r=Math.random()*1.5+0.4;
    this.vx=(Math.random()-0.5)*0.28; this.vy=(Math.random()-0.5)*0.28;
    this.o=Math.random()*0.5+0.1;
  }
  Particle.prototype.update=function(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0)this.x=W; if(this.x>W)this.x=0;
    if(this.y<0)this.y=H; if(this.y>H)this.y=0;
  };
  for(let i=0;i<90;i++) particles.push(new Particle());
  function draw(){
    ctx.clearRect(0,0,W,H);
    const col=isDark()?'0,200,224':'0,111,166';
    particles.forEach(p=>{
      p.update();
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${col},${p.o})`;
      ctx.fill();
    });
    // lines
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(${col},${0.08*(1-d/110)})`;
          ctx.lineWidth=0.6; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

>>>>>>> ashwani-work
/* ============================================================
   NAVBAR SCROLL
============================================================ */
const nav = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>40);
});

/* ============================================================
   HAMBURGER MENU
============================================================ */
const ham = document.getElementById('hamburger');
const mm = document.getElementById('mobile-menu');
let menuOpen=false;
ham.addEventListener('click',()=>{
  menuOpen=!menuOpen;
  mm.classList.toggle('open',menuOpen);
  const spans=ham.querySelectorAll('span');
  if(menuOpen){
    spans[0].style.transform='rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity='0';
    spans[2].style.transform='rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s=>{s.style.transform='';s.style.opacity=''});
  }
});
document.querySelectorAll('.mm-link').forEach(l=>{
  l.addEventListener('click',()=>{menuOpen=false;mm.classList.remove('open');ham.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity=''})});
});

/* ============================================================
   DARK / LIGHT TOGGLE
============================================================ */
const themeBtn = document.getElementById('theme-toggle');
let dark=true;
themeBtn.addEventListener('click',()=>{
  dark=!dark;
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  themeBtn.textContent=dark?'☀':'🌙';
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(el=>obs.observe(el));

/* ============================================================
   ANIMATED COUNTERS
============================================================ */
const counters = document.querySelectorAll('.counter');
const cObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target; const target=+el.dataset.target;
      let cur=0; const step=target/70;
      const iv=setInterval(()=>{
        cur+=step; if(cur>=target){cur=target;clearInterval(iv)}
        el.textContent=Math.floor(cur)+(target>=100?'':'+');
      },20);
      cObs.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(c=>cObs.observe(c));

/* ============================================================
   SOLUTION BARS
============================================================ */
const solBars = document.querySelectorAll('.sol-bar');
const barObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.width=e.target.dataset.width+'%';
      barObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
solBars.forEach(b=>barObs.observe(b));

/* ============================================================
   TESTIMONIAL SLIDER
============================================================ */
(function(){
  const track=document.getElementById('testi-track');
  const dots=document.querySelectorAll('.testi-dot');
  const cards=document.querySelectorAll('.testi-card');
  let idx=0,perView=3,auto;
  function getPerView(){
    if(window.innerWidth<768) return 1;
    if(window.innerWidth<1100) return 2;
    return 3;
  }
  function goTo(i){
    perView=getPerView();
    const max=cards.length-perView;
    idx=Math.max(0,Math.min(i,max));
    const w=cards[0].offsetWidth+28;
    track.style.transform=`translateX(-${idx*w}px)`;
    dots.forEach((d,j)=>d.classList.toggle('active',j===idx));
  }
  document.getElementById('testi-prev').addEventListener('click',()=>{goTo(idx-1);resetAuto()});
  document.getElementById('testi-next').addEventListener('click',()=>{goTo(idx+1);resetAuto()});
  dots.forEach(d=>d.addEventListener('click',()=>{goTo(+d.dataset.i);resetAuto()}));
  window.addEventListener('resize',()=>goTo(idx));
  function startAuto(){auto=setInterval(()=>{goTo(idx+1<cards.length-getPerView()+1?idx+1:0)},4500)}
  function resetAuto(){clearInterval(auto);startAuto()}
  startAuto(); goTo(0);
})();

/* ============================================================
   PORTFOLIO FILTERS
============================================================ */
document.querySelectorAll('.pf-btn').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ============================================================
   FAQ ACCORDION
============================================================ */
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

/* ============================================================
   3D TILT ON CARDS
============================================================ */
document.querySelectorAll('.service-card,.price-card,.why-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-0.5;
    const y=(e.clientY-r.top)/r.height-0.5;
    card.style.transform=`translateY(-6px) rotateX(${-y*7}deg) rotateY(${x*7}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='';
  });
});

/* ============================================================
   SMOOTH SCROLL
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
<<<<<<< HEAD



/* ============================================================
   Foarm submission oogle sheets
============================================================ */


const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const submitBtn =
    document.getElementById('submit-btn');

  submitBtn.innerHTML = 'Sending...';

  const formData = new FormData(form);

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    service: formData.get('service'),
    message: formData.get('message')
  };

  try {

    await fetch(
      'https://script.google.com/macros/s/AKfycbyORIE-0gvEOSOjRpThfpHztGTPBG9Yuu4Y4Q8JN22noBkhfJ9U-uOLVlUFYnWKZwtg/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(data)
      }
    );

    submitBtn.innerHTML =
      '✓ Message Sent Successfully';

    form.reset();

  } catch (err) {

    console.log(err);

    submitBtn.innerHTML =
      'Something went wrong';

  }

});
=======
>>>>>>> ashwani-work
