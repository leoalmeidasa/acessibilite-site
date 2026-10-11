(function () {
  var raiz = document.documentElement;
  var botaoContraste = document.querySelector('[data-acao="contraste"]');
  var prefs = {};
  try { prefs = JSON.parse(localStorage.getItem('a11y') || '{}'); } catch (e) {}

  function salvar() {
    try { localStorage.setItem('a11y', JSON.stringify(prefs)); } catch (e) {}
  }

  function aplicar() {
    raiz.classList.toggle('alto-contraste', !!prefs.contraste);
    raiz.style.setProperty('--escala', prefs.fonte || 1);
    botaoContraste.setAttribute('aria-pressed', prefs.contraste ? 'true' : 'false');
  }

  document.querySelector('.barra-a11y').addEventListener('click', function (ev) {
    var acao = ev.target.getAttribute('data-acao');
    if (!acao) return;
    var fonte = prefs.fonte || 1;
    if (acao === 'aumentar') prefs.fonte = Math.min(1.5, +(fonte + 0.125).toFixed(3));
    if (acao === 'diminuir') prefs.fonte = Math.max(0.875, +(fonte - 0.125).toFixed(3));
    if (acao === 'padrao') prefs.fonte = 1;
    if (acao === 'contraste') prefs.contraste = !prefs.contraste;
    aplicar();
    salvar();
  });

  document.getElementById('ano').textContent = new Date().getFullYear();
  aplicar();
})();
