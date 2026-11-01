/* Introduction : trois chantiers en 2D, puis un lancement de portfolio dans la console.
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

  const timers = [];
  let fini = false;

  const sleep = (ms) =>
    reduce
      ? Promise.resolve()
      : new Promise((resolve) => timers.push(setTimeout(resolve, ms)));

  const go = () => {
    if (fini) return;
    fini = true;
    timers.forEach(clearTimeout);
    location.replace(DEST);
  };

  const $ = (id) => document.getElementById(id);
  const bricks = $('scene-bricks');
  const term = $('scene-term');
  const out = $('out');
  const body = out.parentElement;

  const PROMPT = 'florent@homelab:~$';

  // Une seule commande de lancement, puis le statut des trois chantiers
  const COMMANDE = './lancer-portfolio';
  const STATUTS = [
    ['[ ok ] Ansible      5 serveurs déployés', 'ok'],
    ['[ ok ] Proxmox VE   quorum 2/3, bascule testée', 'ok'],
    ['[ ok ] Axone        annuaire, partages, supervision', 'ok'],
    ['Portfolio prêt.', ''],
  ];

  const scrollBas = () => {
    body.scrollTop = body.scrollHeight;
  };

  const addLine = (texte, cls) => {
    const d = document.createElement('div');
    d.className = 'l' + (cls ? ' ' + cls : '');
    d.textContent = texte;
    out.appendChild(d);
    scrollBas();
  };

  async function taper(el, texte) {
    for (const ch of texte) {
      if (fini) return;
      el.textContent += ch;
      await sleep(22 + Math.random() * 16);
    }
  }

  async function console_() {
    const ligne = document.createElement('div');
    ligne.className = 'l';
    const ps = document.createElement('span');
    ps.className = 'ps';
    ps.textContent = PROMPT;
    const cmd = document.createElement('span');
    cmd.className = 'cmd';
    const curseur = document.createElement('span');
    curseur.className = 'cursor';
    ligne.append(ps, ' ', cmd, curseur);
    out.appendChild(ligne);
    scrollBas();

    await sleep(150);
    await taper(cmd, COMMANDE);
    curseur.remove();
    await sleep(250);

    for (const [texte, cls] of STATUTS) {
      if (fini) return;
      addLine(texte, cls);
      await sleep(280);
    }
    await sleep(600);
    go();
  }

  async function main() {
    if (reduce) {
      // mouvement réduit : pas de scène 2D, la console s'affiche d'un bloc
      bricks.hidden = true;
      term.classList.add('is-on');
    } else {
      await sleep(5100);
      if (fini) return;
      bricks.classList.remove('is-on');
      await sleep(400);
      term.classList.add('is-on');
    }
    await console_();
  }

  // Passer : une touche, un clic, un tap, ou le bouton
  document.addEventListener('keydown', go);
  document.addEventListener('click', go);
  document.querySelector('.skip').addEventListener('click', go);

  main();
})();
