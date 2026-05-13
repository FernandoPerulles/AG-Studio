function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.remove('active');
  hamburger.classList.remove('active');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
