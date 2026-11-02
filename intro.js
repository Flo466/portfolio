/* Introduction : trois chantiers en 2D, puis le portfolio.
   Une touche, un clic ou le bouton « Passer » mènent directement au portfolio. */
(() => {
  'use strict';

  // Page d'arrivée. Si vous renommez les fichiers, changez cette valeur.
  const DEST = 'portfolio.html';

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Une seule intro par session, sauf si l'URL contient ?replay
  let vue = false;
  try {
    vue = sessionStorage.getItem('intro-vue') === '1';
  } catch (e) { /* stockage bloqué : on joue l'intro */ }
  if (vue && !new URLSearchParams(location.search).has('replay')) {
    location.replace(DEST);
    return;
  }
  try {
    sessionStorage.setItem('intro-vue', '1');
  } catch (e) { /* ignoré */ }

  let fini = false;
  const go = () => {
    if (fini) return;
    fini = true;
    location.replace(DEST);
  };

  // Passer : une touche, un clic, un tap, ou le bouton
  document.addEventListener('keydown', go);
  document.addEventListener('click', go);
  document.querySelector('.skip').addEventListener('click', go);

  // Durée des trois briques, alignée sur le carrousel mobile (3 x 1,7 s)
  setTimeout(go, reduce ? 1200 : 5100);
})();
