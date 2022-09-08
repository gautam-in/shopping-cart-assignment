class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="footer">
        <section class="footer-section">Copyright @2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</section>
      </footer>
    `;

    }
  }
  customElements.define('footer-component', Footer);