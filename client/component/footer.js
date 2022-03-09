const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <style>
        .container {
            display: flex;
            align-items: center;
            height: 50px;
            background: #dee0df;
            box-shadow: #dee0df 0px 0px 0px 4px;
            justify-content: center;
        }
    </style>
    <div class="container">
        <div>
            Copyright @ 2019-2022 Sabka Bazar Grocery Supplies Pvt Ltd
        </div>
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
