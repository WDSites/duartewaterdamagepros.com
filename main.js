(function () {
  var BP = 900;
  var btn = document.querySelector('.menubtn');
  var menu = document.getElementById('mobilemenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > BP && menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }
  var qs = document.querySelectorAll('.faqq');
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function () {
      var item = this.closest('.faqitem');
      var open = item.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
      var a = item.querySelector('.faqa');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  }
})();
