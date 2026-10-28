// ── DATA ──

const photos = [
  { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800', cap: 'Momen Indah Kita' },
  { src: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800', cap: 'Kebahagiaan Bersamamu' },
  { src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800', cap: 'Langkah Bersama' },
  { src: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=800', cap: 'Cinta Dalam Genggaman' },
  { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800', cap: 'Dunia Terasa Indah' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', cap: 'Senyum Paling Manis' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&q=80&w=800', cap: 'Setiap Detik Berharga' },
  { src: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=800', cap: 'Kebersamaan Kita' },
  { src: 'https://images.unsplash.com/photo-1531747056595-07f6cb1b042f?auto=format&fit=crop&q=80&w=800', cap: 'Mimpi Yang Terwujud' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800', cap: 'Pelukan Hangat' },
  { src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe249f?auto=format&fit=crop&q=80&w=800', cap: 'Tawa Lepas' },
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', cap: 'Hari Yang Spesial' },
  { src: 'https://images.unsplash.com/photo-1464349172904-7d9db299b1ea?auto=format&fit=crop&q=80&w=800', cap: 'Kejutan Kecil' },
  { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800', cap: 'Harapan Baru' },
  { src: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=800', cap: 'Selamanya Bersamamu' },
  { src: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800', cap: 'Momen Tak Terlupakan' },
  { src: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=800', cap: 'Cinta Sejati' },
  { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800', cap: 'Janji Suci' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', cap: 'Masa Depan Cerah' },
  { src: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=800', cap: 'Keluarga Bahagia' },
  { src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe249f?auto=format&fit=crop&q=80&w=800', cap: 'Cinta Abadi' },
];

const reasons = [
  { icon: '😊', title: 'Senyummu', sub: 'Selalu bisa menceriakan hariku yang paling gelap.' },
  { icon: '💬', title: 'Caramu Bicara', sub: 'Suaramu adalah melodi paling indah yang pernah kudengar.' },
  { icon: '✨', title: 'Kecerdasanmu', sub: 'Aku kagum dengan caramu melihat dunia dan menyelesaikan masalah.' },
  { icon: '🎵', title: 'Tawamu', sub: 'Obat paling ampuh untuk segala rasa lelah dan sedihku.' },
  { icon: '💪', title: 'Kehadiranmu', sub: 'Dunia terasa jauh lebih baik saat ada kamu di sisiku.' },
  { icon: '🏠', title: 'Kamu adalah Rumah', sub: 'Tempat paling nyaman untuk pulang, bercerita, dan beristirahat.' },
];

// ── CURSOR & TRAILS ──
const cur = document.getElementById('cur'), ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouch) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    if (Math.random() > 0.85) {
      const h = document.createElement('div'); h.className = 'cursor-heart';
      h.innerHTML = ['❤', '💖', '✨', '🌸', '💕'][Math.floor(Math.random() * 5)];
      h.style.left = mx + 'px'; h.style.top = my + 'px';
      document.body.appendChild(h); setTimeout(() => h.remove(), 1000);
    }
  });
  (function anim() { rx += (mx - rx) * .1; ry += (my - ry) * .1; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(anim); })();
} else {
  if (cur) cur.style.display = 'none';
  if (ring) ring.style.display = 'none';
}

// ── PETALS ──
function createPetals() {
  const icons = ['🌸', '✨', '🤍', '💗', '🍓', '🧸', '🌈'];
  setInterval(() => {
    const p = document.createElement('div'); p.className = 'petal';
    p.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (Math.random() * 15 + 15) + 'px';
    p.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.body.appendChild(p); setTimeout(() => p.remove(), 10000);
  }, 600);
}
createPetals();

// ── WANDERING HEARTS ──
function spawnWanderHearts() {
  const icons = ['💖', '💕', '💗', '🤍'];
  for (let i = 0; i < 5; i++) {
    const h = document.createElement('div'); h.className = 'wandering-heart';
    h.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    h.style.left = Math.random() * 90 + 'vw';
    h.style.top = Math.random() * 90 + 'vh';
    h.style.animationDelay = (Math.random() * -15) + 's';
    document.body.appendChild(h);
  }
}
spawnWanderHearts();

// ── PARTICLES ──
const ptsEl = document.getElementById('pts');
if (ptsEl) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div'); p.className = 'pt';
    const sz = Math.random() * 5 + 2;
    const hue = Math.random() > .5 ? 'rgba(255,77,109,' : 'rgba(255,215,0,';
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;background:${hue}.4);animation-duration:${9 + Math.random() * 14}s;animation-delay:${Math.random() * 12}s`;
    ptsEl.appendChild(p);
  }
}

// ── STRIP ──
function buildStrip(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  [...items, ...items].forEach(d => {
    const c = document.createElement('div'); c.className = 'strip-card';
    c.innerHTML = `<img src="${d.src}" alt="${d.cap}"/><div class="sc-overlay"><p>${d.cap}</p></div>`;
    c.onclick = () => openLB(d.src, d.cap);
    el.appendChild(c);
  });
}
buildStrip('s1', photos);
buildStrip('s2', [...photos].reverse());

// ── MAGAZINE GRID ──
const grid = document.getElementById('mag-grid');
if (grid) {
  const years = [
    { year: '2023', start: 0, count: 6 },
    { year: '2024', start: 6, count: 6 },
    { year: '2025', start: 12, count: 6 },
    { year: 'Future', start: 18, count: 3 }
  ];

  years.forEach(y => {
    // Add Year Header
    const header = document.createElement('div');
    header.className = 'year-header';
    header.innerHTML = `<h3>${y.year}</h3>`;
    grid.appendChild(header);

    // Add Photos for this year
    for (let i = y.start; i < y.start + y.count; i++) {
      const d = photos[i];
      if (!d) break;

      const m = document.createElement('div');
      m.className = 'mg';
      m.innerHTML = `<img src="${d.src}" alt="${d.cap}" onerror="this.src='https://via.placeholder.com/400x500?text=Upload+Foto+Disini'"/>
      <div class="mg-cap">
        <span class="mc-title">${d.cap}</span>
      </div>`;
      m.onclick = () => openLB(d.src, d.cap);
      grid.appendChild(m);
    }
  });

  // Add "Soon" Section Text at bottom
  const soon = document.createElement('div');
  soon.className = 'soon-section';
  soon.innerHTML = `<div class="soon-text">... SOON ...</div>
                    <p style="font-size: 11px; color: var(--rose3); letter-spacing: 2px; margin-top: 1rem;">Masa depan yang indah menanti kita ✨</p>`;
  grid.appendChild(soon);
}

// ── REASONS ──
const rw = document.getElementById('reasons-wrap');
if (rw) {
  reasons.forEach((r, i) => {
    const c = document.createElement('div'); c.className = 'rc';
    c.innerHTML = `<span class="rc-icon">${r.icon}</span>
    <div class="rc-title">${r.title}</div>
    <div class="rc-sub">${r.sub}</div>
    <div class="rc-num">${String(i + 1).padStart(2, '0')}</div>`;
    rw.appendChild(c);
  });
}

// ── TIMELINE SCROLL ──
const obsTl = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') });
}, { threshold: .2 });
document.querySelectorAll('.tl-entry').forEach(e => obsTl.observe(e));

// ── SURAT CINTA──
const msg = "Happy anniversary ..................................";
let idx = 0, typingStarted = false;
function type() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  if (idx < msg.length) {
    el.innerHTML += msg.charAt(idx);
    idx++; setTimeout(type, 50);
  }
}
const letterEl = document.getElementById('letter');
if (letterEl) {
  const obsType = new IntersectionObserver(e => {
    if (e[0].isIntersecting && !typingStarted) { typingStarted = true; type(); }
  }, { threshold: 0.5 });
  obsType.observe(letterEl);
}

// ── HEART EXPLOSION ──
function heartExplosion(e) {
  for (let i = 0; i < 12; i++) {
    const h = document.createElement('div'); h.className = 'explosion-heart';
    h.innerHTML = ['❤', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
    h.style.left = e.clientX + 'px'; h.style.top = e.clientY + 'px';
    const angle = (Math.PI * 2 / 12) * i, dist = 100 + Math.random() * 50;
    h.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
    h.style.setProperty('--ty', (Math.sin(angle) * dist) + 'px');
    document.body.appendChild(h); setTimeout(() => h.remove(), 800);
  }
}

// ── LIGHTBOX ──
function openLB(src, cap) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-cap-text').textContent = cap;
  document.getElementById('lb').classList.add('open');
}
function closeLB() { document.getElementById('lb').classList.remove('open'); }
const lb = document.getElementById('lb');
if (lb) {
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
}

// ── FLOATING HEARTS on hover ──
const fhL = document.getElementById('fh-layer');
const fhE = ['💗', '✨', '💕', '🌸', '💖', '⭐', '🌺'];
const heroPhoto = document.getElementById('hero-photo');
if (heroPhoto) {
  heroPhoto.addEventListener('mouseenter', (e) => spawnHF(8, e));
}
document.querySelectorAll('.mg,.strip-card').forEach(el => {
  el.addEventListener('mouseenter', e => spawnHF(4, e));
});

function spawnHF(n, e) {
  if (!fhL) return;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const h = document.createElement('div'); h.className = 'fh';
      h.textContent = fhE[Math.floor(Math.random() * fhE.length)];
      h.style.left = (10 + Math.random() * 80) + '%';
      h.style.bottom = (15 + Math.random() * 20) + '%';
      h.style.animationDuration = (2.5 + Math.random()) + 's';
      fhL.appendChild(h);
      setTimeout(() => h.remove(), 4000);
    }, i * 110);
  }
}

// ── PIXEL ANIMATION ──
const PIXEL_SMILE = "photos/pixel1.jpg";
const PIXEL_WINK = "photos/pixel2.jpg";

function pixelHover(isInside) {
  const main = document.getElementById('main-pixel');
  if (main) main.src = isInside ? PIXEL_SMILE : PIXEL_WINK;
}

function pixelSurpriseAction(e) {
  const container = e.currentTarget;
  const speech = document.getElementById('pixel-speech');
  const msgs = ["AKU SAYANG KAMUU!!! 💖💖💖", "MUAAACHHH!!! 💋✨"];

  container.classList.remove('jump');
  void container.offsetWidth;
  container.classList.add('jump');

  document.body.classList.remove('shake');
  void document.body.offsetWidth;
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 500);

  const flash = document.createElement('div');
  flash.className = 'bg-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 800);

  const sh = document.createElement('div');
  sh.className = 'super-heart';
  sh.innerHTML = '💖';
  document.body.appendChild(sh);
  setTimeout(() => sh.remove(), 1000);

  if (speech) {
    speech.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    speech.style.opacity = 1;
    speech.style.top = "-60px";
    setTimeout(() => {
      speech.style.opacity = 0;
      speech.style.top = "-50px";
    }, 3000);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => heartExplosion(e), i * 150);
  }

  const fhLayer = document.getElementById('fh-layer');
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const p = document.createElement('div'); p.className = 'fh';
      p.innerHTML = ['✨', '💖', '⭐', '🌸', '💋', '💝'][Math.floor(Math.random() * 6)];
      p.style.left = (Math.random() * 100) + '%';
      p.style.bottom = '0%';
      p.style.fontSize = (Math.random() * 20 + 20) + 'px';
      p.style.animationDuration = (Math.random() * 2 + 2) + 's';
      if (fhLayer) fhLayer.appendChild(p);
      setTimeout(() => p.remove(), 3000);
    }, i * 50);
  }
}

// ── STICKERS ──
function spawnStickers() {
  const icons = ['💌', '🧸', '💍', '🌹', '🍫', '🎀', '🎈', '🍭', '🍓', '🦢'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('div');
    s.className = 'sticker';
    s.innerHTML = icons[i % icons.length];
    s.style.left = Math.random() * 90 + 'vw';
    s.style.top = Math.random() * 90 + 'vh';
    s.style.animationDelay = (Math.random() * -20) + 's';
    s.style.fontSize = (Math.random() * 15 + 20) + 'px';

    s.onclick = (e) => {
      heartExplosion(e);
      s.style.transform = 'scale(0) rotate(720deg)';
      setTimeout(() => {
        s.style.left = Math.random() * 90 + 'vw';
        s.style.top = Math.random() * 90 + 'vh';
        s.style.transform = 'scale(1) rotate(0deg)';
      }, 2000);
    };

    document.body.appendChild(s);
  }
}
spawnStickers();

// ── SCROLL PROGRESS ──
window.addEventListener('scroll', () => {
  const progress = document.getElementById("scroll-progress");
  if (!progress) return;
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.style.width = scrolled + "%";
});

// ── CUTE BUBBLES ──
function spawnBubbles() {
  for (let i = 0; i < 15; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const sz = Math.random() * 40 + 10;
    b.style.width = sz + 'px';
    b.style.height = sz + 'px';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDuration = (Math.random() * 5 + 8) + 's';
    b.style.animationDelay = (Math.random() * 10) + 's';
    document.body.appendChild(b);
  }
}
spawnBubbles();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function revealGallery() {
  const box = document.getElementById('gallery-box');
  const content = document.getElementById('gallery-content');
  if (box && content) {
    box.style.display = 'none';
    content.classList.add('gallery-visible');
    
    // Confetti Surprise
    if (window.confetti) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#c77dff']
      });
    }
  }
}
