(function(w) {
  'use strict';

  var event = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
  var eventParams = event === 'touchstart' ? {passive: true} : {};

  function initMobileMenu() {
    document.querySelector('.nav-mobile__button').addEventListener(event, function() {
      var body = document.querySelector('body');
      var isOpen = body.classList.contains('nav-mobile-is-open');

      if (isOpen) {
        body.classList.remove('nav-mobile-is-open');
      } else {
        body.classList.add('nav-mobile-is-open');
      }
    }, eventParams);
  }

  function initDeferImg() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
      }
    }
  }

  function loadGtm() {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', window.gtm_id);
  }

  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDeferImg();
    loadGtm();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../service-worker.js');
  }
})(window);
