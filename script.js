/* Contractor OS — mobile nav and FAQ accordion */

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var mobilePanel = document.getElementById('nav-mobile-cta');

  if (toggle && mobilePanel) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobilePanel.setAttribute('aria-hidden', String(expanded));
      mobilePanel.classList.toggle('is-open', !expanded);
    });
  }

  // FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      faqItems.forEach(function (i) {
        i.classList.remove('open');
        var q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

})();
