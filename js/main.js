// Image/video slots: each .slot[data-img] looks for assets/<name>.(jpg|jpeg|png|webp|gif|avif|mp4).
// If none exists yet, the grey placeholder (with the expected file name) stays visible.
(function () {
  var exts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'mp4'];
  document.querySelectorAll('.slot[data-img]').forEach(function (slot) {
    var base = 'assets/' + slot.getAttribute('data-img');
    var i = 0;
    (function tryNext() {
      if (i >= exts.length) return;
      var ext = exts[i], src = base + '.' + ext;
      if (ext === 'mp4') {
        var v = document.createElement('video');
        v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
        v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
        v.onloadeddata = function () { slot.appendChild(v); slot.classList.add('loaded'); v.play && v.play().catch(function () {}); };
        v.onerror = function () { i++; tryNext(); };
        v.src = src;
        return;
      }
      var im = new Image();
      im.alt = '';
      im.decoding = 'async';
      im.onload = function () { slot.appendChild(im); slot.classList.add('loaded'); };
      im.onerror = function () { i++; tryNext(); };
      im.src = src;
    })();
  });
})();
