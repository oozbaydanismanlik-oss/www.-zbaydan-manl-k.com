document.getElementById('year').textContent = new Date().getFullYear();
const langToggle = document.getElementById('langToggle');
let current = 'tr';
langToggle.addEventListener('click', () => {
  current = current === 'tr' ? 'en' : 'tr';
  langToggle.textContent = current.toUpperCase() === 'TR' ? 'EN' : 'TR';
  applyI18n(current);
});
function applyI18n(lang){
  const I18N = window.I18N || {};
  const map = I18N[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(map[k]) el.textContent = map[k];
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'tr';
}
