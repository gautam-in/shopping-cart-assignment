const getPageLayout = (pName, description, image,price) => {
    return ` 
    <style>
        input[type=button]{
            background-color: #ab3862;
            border: none;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            cursor: pointer;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
        }
    </style>
    <product-card product-name="${pName}" product-image="${image}" product-desc="${description}" product-price="${price}"/>
`
} 
class PlpPage extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = getPageLayout(elem.getAttribute('prodName'),elem.getAttribute('description'),elem.getAttribute('image'),elem.getAttribute('price'));
    }

    connectedCallback() {
        this.updateStyle(this)
    }
}

customElements.define("plp-page", PlpPage);