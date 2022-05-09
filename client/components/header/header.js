class Header extends HTMLElement {
  constructor() {
    super();

    this.heading = "";
    this.subheading = "";
  }

  connectedCallback() {
    this.heading = this.getAttribute("heading");

    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align: center; font-family: sans-serif">
          <h1>${this.heading}</h1>
        </div>
        `;
  }
}

customElements.define("my-header", Header);
