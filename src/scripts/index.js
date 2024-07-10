import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger-menu'),
  drawer: document.querySelector('.nav-drawer'),
  content: document.querySelector('.restaurant-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
