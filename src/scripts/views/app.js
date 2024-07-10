/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    try { 
      this._content.innerHTML = await page.render(); 
      await page.afterRender(); 
  } catch (error) {
      console.error("Error rendering page:", error);
      this._content.innerHTML = `
          <div class="error-message">
              <h2>Oops! Terjadi kesalahan.</h2>
              <p>Maaf, halaman yang Anda coba akses tidak dapat dimuat. Silakan coba lagi atau kembali ke <a href="/">halaman utama</a>.</p>
          </div>
      `;
  } 
    await page.afterRender();

    // Add the script for skip to content functionality
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContent = document.querySelector('#main');
      mainContent.setAttribute('tabindex', '0');
      mainContent.focus();
    });
  }
}

export default App;
