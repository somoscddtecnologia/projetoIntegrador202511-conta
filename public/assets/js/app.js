// Script mantido da versão legado
(function(){
  const themeBtn = document.querySelector('[data-action="toggle-theme"]');
  const html = document.documentElement;
  try {
    const pref = localStorage.getItem('rpb-ui-dark');
    if (pref === 'true') html.classList.add('dark');
  } catch {}
  if (themeBtn) {
    themeBtn.addEventListener('click', function(){
      html.classList.toggle('dark');
      try { localStorage.setItem('rpb-ui-dark', String(html.classList.contains('dark'))); } catch {}
    });
  }
})();