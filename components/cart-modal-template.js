class CartModalTemplate extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = /*html*/`
        <div id="cartModal" class="modal tooltip">
        <div class="modal-content">
            <div class="modal-header">
                <h3 tabindex="0">My cart</h3>
                <span aria-label="Close" tabindex="0" class="close">&times;</span>
            </div>
            <div class="modal-body">
                <h2 tabindex="0">No item in your cart</h2>
                <p>Your favourite items are just a click away</p>
            </div>
            <div class="modal-footer">
                <button onclick="location.href='products.html'">Start Shopping</button>
            </div>
        </div>
    </div>
        `
    }


}

customElements.define('cart-modal-template', CartModalTemplate);

