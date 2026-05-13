// ── CONCENTRIC ARCS ──
const arcsEl = document.getElementById('arcs');
if (arcsEl) {
  for (let i = 0; i < 7; i++) {
    const arc = document.createElement('div');
    arc.className = 'arc';
    const s = 120 + i * 80;
    arc.style.cssText = `width:${s}px;height:${s}px;animation-delay:${i * 0.4}s;`;
    arcsEl.appendChild(arc);
  }
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── MOBILE MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger');
  if (menu && btn) {
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger');
  if (menu && btn) {
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

// ── AUDIENCE TABS ──
function switchAudience(id, btn) {
  document.querySelectorAll('.an-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.audience-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
}

// ── FAQ ──
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
