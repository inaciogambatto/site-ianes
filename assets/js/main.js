// IANES — menu móvel, aviso de cookies e ano no rodapé
(function () {
  document.documentElement.classList.remove('no-js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu-principal');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();

  var banner = document.getElementById('cookie');
  var KEY = 'ianes-cookie-ok';
  var ok = false;
  try { ok = localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (banner && !ok) {
    banner.classList.add('show');
    banner.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      banner.classList.remove('show');
    });
  }

  // Formulário de contato (protótipo): sem envio real até configurar o serviço
  var form = document.getElementById('form-contato');
  if (form && form.getAttribute('action') === '#') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-status');
      if (msg) msg.textContent = 'Protótipo: o envio será ativado quando o serviço de formulário e o e-mail institucional forem configurados.';
    });
  }
})();
