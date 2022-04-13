import './Footer.scss'

class SBFooter extends HTMLElement {
  constructor() {
      super()
  }
  connectedCallback() {
    let footer = document.createElement("footer");
    footer.setAttribute("class", "sb-footer");

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    container.innerHTML = "Copyright &copy; 2022 Sabka Bazaar Grocery Supplies Pvt Ltd.";

    footer.append(container);

    this.appendChild(footer)
  }
  
}

customElements.define('sb-footer', SBFooter);