// ── Nav scroll glassmorphism ──────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ── FAQ accordion ─────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Scroll reveal via IntersectionObserver ────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Hero elements shown immediately (above the fold)
document.querySelectorAll('.s-hero .reveal').forEach(el => {
  el.classList.add('visible');
});

// All other reveal elements observed
document.querySelectorAll('.reveal:not(.s-hero .reveal)').forEach(el => {
  observer.observe(el);
});
