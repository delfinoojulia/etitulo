// controla zoom da imagem e fecha ao clicar fora
document.addEventListener('DOMContentLoaded', function () {
  const lupaBtn = document.getElementById('lupaBtn');
  const jdzoom = document.getElementById('imagem-jdzoom');
  const profile = document.querySelector('.profile-pic');

  function toggleZoom(e) {
    if (!jdzoom) return;
    jdzoom.classList.toggle('zoom');
    // stop propagation to prevent document click handler from closing immediately
    e && e.stopPropagation();
  }

  lupaBtn?.addEventListener('click', toggleZoom);

  // fecha ao clicar fora da profile-pic
  document.addEventListener('click', function (ev) {
    if (!jdzoom) return;
    if (jdzoom.classList.contains('zoom')) {
      if (!profile.contains(ev.target)) {
        jdzoom.classList.remove('zoom');
      }
    }
  });

  // tecla ESC fecha zoom
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && jdzoom?.classList.contains('zoom')) {
      jdzoom.classList.remove('zoom');
    }
  });
});
