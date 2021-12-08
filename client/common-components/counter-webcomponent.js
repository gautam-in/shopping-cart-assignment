class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(val) {
    return this.setAttribute("count", val);
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "count") {
      this.render();
      let btn = this.shadow.querySelector("#btn");
      btn.addEventListener("click", this.inc.bind(this));
    }
  }

  inc() {
    this.count++;
  }

  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector("#btn");
    btn.addEventListener("click", this.inc.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
    <h1>Counter</h1>
    ${this.count}
    <button id="btn">Increment</button>
    `;
  }
}

customElements.define("my-counter", MyCounter);
