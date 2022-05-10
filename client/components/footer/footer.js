class Footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
      <style>
          footer{
              text-align: center;
              background-color: #eaeaea;
              padding: 3px 0px;
          }
          @media screen and (max-width: 480px){
            footer{
              font-size:12px
            }
          }
      </style>
      <footer>
          <p>Copyright &copy; ${new Date().getFullYear()} Sabka Bazaar Grocery Suppliers Limited</p>
      </footer>
      `;
  }
}

customElements.define("my-footer", Footer);
