class FooterTemplate extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = /*html*/`
        
        <footer role="contentinfo">
        <p class="app-footer">
            Copyright &copy; 2011-2019 Sabka Bazaar Grocery Supplies Pvt Ltd
        </p>
    </footer>
        `
    }


}

customElements.define('footer-template', FooterTemplate);

