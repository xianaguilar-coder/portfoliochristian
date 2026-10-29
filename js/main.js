// Image slots: each .slot[data-img] looks for assets/<name>.(jpg|jpeg|png|webp|avif).
// If none exists yet, the grey placeholder (with the expected file name) stays visible.
(function () {
  var exts = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
  document.querySelectorAll('.slot[data-img]').forEach(function (slot) {
    var base = 'assets/' + slot.getAttribute('data-img');
    var i = 0;
    (function tryNext() {
      if (i >= exts.length) return;
      var im = new Image();
      im.alt = '';
      im.decoding = 'async';
      im.onload = function () { slot.appendChild(im); slot.classList.add('loaded'); };
      im.onerror = function () { i++; tryNext(); };
      im.src = base + '.' + exts[i];
    })();
  });
})();
