class Footer extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.innerHTML = 
        `
        <style>
            footer{
                text-align: center;
                background-color: #d1cccc;
                padding: 3px 0px;
            }
        </style>
        <footer>
            <p>Copyright &copy; 2011-${new Date().getFullYear()} Sabka Bazaar Grocery Suppliers Limited</p>
        </footer>
        `
    }
}

customElements.define('uc-footer', Footer)