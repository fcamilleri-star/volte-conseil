/* VOLTE — main.js */

// ── BACK TO TOP ──
let _bttBtn = null;
function _bttUpdate(index) {
  if (!_bttBtn) return;
  _bttBtn.classList.toggle('visible', typeof index === 'number' ? index > 0 : window.scrollY > window.innerHeight * 0.4);
}
document.addEventListener('DOMContentLoaded', () => {
  _bttBtn = document.querySelector('.back-to-top');
  if (!_bttBtn) return;
  const _bttHero = document.getElementById('hero') || document.querySelector('section');
  window.addEventListener('scroll', () => _bttUpdate(), { passive: true });
  _bttBtn.addEventListener('click', () => {
    if (_bttHero) _bttHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { if (window._snapResetToHero) window._snapResetToHero(); }, 850);
  });
});

// ── ANCRES MOBILE : smooth scroll compatible iOS scroll-snap ──
(function() {
  if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;
  document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Burger
const burger = document.getElementById('burger');
const navMob = document.getElementById('nav-mob');
if (burger && navMob) {
  burger.addEventListener('click', () => {
    const open = navMob.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navMob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMob.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }));
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMob) {
    navMob.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));


// ── STICKY ENTRETIEN DÉCOUVERTE ──
(function() {
  const sticky = document.getElementById('decouverte-sticky');
  const closeBtn = document.getElementById('ds-close');
  const section = document.getElementById('interventions');
  if (!sticky || !section) return;

  let dismissed = false;

  closeBtn.addEventListener('click', () => {
    dismissed = true;
    sticky.classList.remove('visible');
    sticky.classList.add('hidden');
  });

  // Lien vers contact ferme aussi le widget
  sticky.querySelector('.ds-cta').addEventListener('click', () => {
    dismissed = true;
    sticky.classList.remove('visible');
  });

  window.addEventListener('scroll', () => {
    if (dismissed) return;
    const rect = section.getBoundingClientRect();
    const inSection = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
    if (inSection) {
      sticky.classList.add('visible');
      sticky.classList.remove('hidden');
    } else {
      sticky.classList.remove('visible');
    }
  }, { passive: true });
})();



// ── SCROLL SNAP JS (desktop only — CSS snap handles mobile) ──
(function() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  const sections = Array.from(document.querySelectorAll('section, footer')).filter(s => s.style.display !== 'none' && getComputedStyle(s).display !== 'none');
  let isScrolling = false;
  let currentIndex = 0;
  let peakDelta = 0;
  let idleTimer = null;

  window._snapResetToHero = function() {
    currentIndex = 0;
    isScrolling = false;
    peakDelta = 0;
  };

  function snapTo(index, lockMs) {
    if (index < 0 || index >= sections.length) return;
    if (index === currentIndex) return;
    currentIndex = index;
    isScrolling = true;
    peakDelta = 0;
    clearTimeout(idleTimer);
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    _bttUpdate(index);
    setTimeout(() => { isScrolling = false; peakDelta = 0; }, lockMs);
  }

  function getCurrentIndex() {
    let closest = 0;
    let minDist = Infinity;
    sections.forEach((s, i) => {
      const dist = Math.abs(s.getBoundingClientRect().top);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    return closest;
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return;

    const abs = Math.abs(e.deltaY);
    const isMouse = abs >= 100;

    // Réinitialise le pic après une pause (nouveau geste)
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { peakDelta = 0; }, 200);

    if (isMouse) {
      // Molette : snap immédiat
      const dir = e.deltaY > 0 ? 1 : -1;
      snapTo(Math.min(Math.max(getCurrentIndex() + dir, 0), sections.length - 1), 350);
    } else {
      // Touchpad : ignore la décélération (inertie), réagit au pic du geste
      const isInertia = peakDelta > 20 && abs < peakDelta * 0.5;
      if (abs > peakDelta) peakDelta = abs;
      if (isInertia) return;
      if (abs >= 15) {
        const dir = e.deltaY > 0 ? 1 : -1;
        snapTo(Math.min(Math.max(getCurrentIndex() + dir, 0), sections.length - 1), 800);
      }
    }
  }, { passive: false });

  window.addEventListener('keydown', (e) => {
    if (isScrolling) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); snapTo(getCurrentIndex() + 1); }
    if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); snapTo(getCurrentIndex() - 1); }
  });
})();