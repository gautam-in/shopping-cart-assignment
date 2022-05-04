class FooterWebComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `<footer class="main-footer">
        Copyright &#169 2011-2018 Sabka Bazaar Grocery Suplies Pvt. Ltd

    </footer>`
    }
}

customElements.define("footer-component", FooterWebComponent);
