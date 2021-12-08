class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    footer {
      background-color: #eaeaea;
      padding: 2px;
      margin-top: 20px;
    }
    footer p {
      margin-left: 8%;
    }
    /* Mobile design */
    @media only screen and (max-width: 600px) {
      footer p {
        font-size: 14px;
      }
    }
    </style>
    <footer>
        <p class="footer">
          Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </p>
    </footer>
    `;
  }
}

customElements.define("app-footer", MyFooter);
