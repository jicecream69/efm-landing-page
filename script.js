// ========================================
// Nav dark/light toggle based on hero
// ========================================
// Nav scroll behavior (no dark/light toggle needed for light hero)


// ========================================
// Video Modal
// ========================================
function openVideo(videoId) {
  var modal = document.getElementById('videoModal');
  var iframe = document.getElementById('modal-video');
  iframe.src = 'https://fast.wistia.net/embed/iframe/' + videoId + '?autoplay=1';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  var modal = document.getElementById('videoModal');
  var iframe = document.getElementById('modal-video');
  iframe.src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeVideo();
});

// ========================================
// FAQ accordion
// ========================================
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.parentElement;
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  });
});

// ========================================
// Module accordion
// ========================================
document.querySelectorAll('.module-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var mod = btn.closest('.module');
    var isOpen = mod.classList.contains('open');
    document.querySelectorAll('.module').forEach(function(m) { m.classList.remove('open'); });
    if (!isOpen) mod.classList.add('open');
  });
});

// Also toggle on module header click
document.querySelectorAll('.module-header').forEach(function(header) {
  header.addEventListener('click', function(e) {
    if (e.target.closest('.module-toggle')) return;
    var mod = header.closest('.module');
    var isOpen = mod.classList.contains('open');
    document.querySelectorAll('.module').forEach(function(m) { m.classList.remove('open'); });
    if (!isOpen) mod.classList.add('open');
  });
});

// ========================================
// Mobile nav
// ========================================
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// ========================================
// Smooth scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});

// ========================================
// Hero trust row reveal
// ========================================
var heroTrustPills = document.querySelector('.hero-trust-pills');

if (heroTrustPills) {
  if ('IntersectionObserver' in window) {
    var trustObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          heroTrustPills.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    trustObserver.observe(heroTrustPills);
  } else {
    heroTrustPills.classList.add('is-visible');
  }
}
