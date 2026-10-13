/* ==========================================================
   Yaosheng Technology 官网 - 交互脚本
   1. 移动端导航开关
   2. 平滑锚点滚动（兼容不支持 scroll-behavior 的浏览器）
   ========================================================== */

(function () {
  'use strict';

  // ---------- 移动端导航开关 ----------
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // 点击导航项后自动收起菜单（移动端体验）
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
      }
    });
  }

  // ---------- 锚点平滑滚动（降级方案） ----------
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
