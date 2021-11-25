const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <style>
        .container {
            display: flex;
            align-items: center;
            height: 50px;
            background: #eaeaea;
            box-shadow: #eaeaea 0px 0px 0px 4px;
            justify-content: center;
        }
    </style>
    <div class="container">
        <article>
            Copyright &copy; 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd
        </article>
    </div>
`;

class Footer extends HTMLElement {
  cartCount;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("uc-footer", Footer);
