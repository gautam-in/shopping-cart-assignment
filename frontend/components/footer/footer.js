const CustomFooter= () => `
    <style>
        .footer{
            background-color: lightgrey;
            padding: 10px 0;
        }
        .footer-content{
            max-width: 90%;
            margin: 0 auto;
        }
        .copyright-text{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 16px;
        }
    </style>

    <div class="footer">
        <div class="footer-content">
        <p class="copyright-text">Copyright <i class="far fa-copyright"></i>2011-2018 Sabka Bazaar Grocery Supplies
            Pvt
            Ltd </p>
        </div>
    </div>
`

class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = CustomFooter();
    }

    connectedCallback() {
        this.updateStyle(this)
    }
}

customElements.define("my-footer", MyFooter);