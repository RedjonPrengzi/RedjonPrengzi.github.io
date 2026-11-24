/* Shared landing-page behaviors for the six app sub-sites:
   Android closed-testing modal, scroll-reveal, reduced-motion awareness. */
(function () {
  'use strict';

  var modal = document.getElementById('androidModal');
  var lastTrigger = null;

  function openModal() {
    if (!modal) return;
    lastTrigger = document.activeElement;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    var first = modal.querySelector('a[href], button:not([disabled])');
    if (first) first.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  document.querySelectorAll('[data-android-modal]').forEach(function (el) {
    el.addEventListener('click', openModal);
  });
  if (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  }

  /* Scroll reveal — elements marked .fade-in-up become .visible once. */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.fade-in-up');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* Dual-mode selector (quitpilot) — mode cards swap the tracked-metrics panel. */
  var modeBtns = document.querySelectorAll('[data-mode]');
  var modePanel = document.getElementById('mode-panel');
  if (modeBtns.length && modePanel) {
    var panelName = document.getElementById('mode-panel-name');
    var switchDelay = reduced ? 0 : 160;
    modeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('active')) return;
        modeBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', on);
        });
        modePanel.classList.add('is-switching');
        setTimeout(function () {
          modePanel.querySelectorAll('[data-panel]').forEach(function (p) {
            p.hidden = p.dataset.panel !== btn.dataset.mode;
          });
          if (panelName) panelName.textContent = btn.querySelector('.mini-title').textContent.trim();
          modePanel.style.setProperty('--card-accent', btn.style.getPropertyValue('--card-accent'));
          modePanel.classList.remove('is-switching');
        }, switchDelay);
      });
    });
  }
})();
