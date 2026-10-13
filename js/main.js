/* ==========================================================
   Yaosheng Technology Website - Interaction Script
   1. Mobile nav toggle
   2. Smooth anchor scrolling (fallback for browsers without scroll-behavior)
   ========================================================== */

(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Auto-close menu after clicking a nav item (mobile UX)
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
      }
    });
  }

  // ---------- Smooth anchor scrolling (fallback) ----------
  if (!('scrollBehavior' in document.documentElement.style)) {
    var anchors = document.querySelectorAll('a[href^="#"]');
    Array.prototype.forEach.call(anchors, function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href');
        if (targetId === '#' || targetId === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0 });
          return;
        }
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - 68;
          window.scrollTo({ top: top });
        }
      });
    });
  }
})();
