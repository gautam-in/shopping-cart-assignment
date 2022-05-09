class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
          <div style="text-align: center; font-family: sans-serif">
            <h1>Footer</h1>
          </div>
          `;
  }
}

customElements.define("my-footer", Footer);
