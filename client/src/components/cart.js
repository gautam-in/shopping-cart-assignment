class CartWebComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<header>
        <div class="cart_header">
        <h4>My Cart</h4>
        <div id="close-cart" onclick="closeCart()"> &#10060 </div>
        </div>
        
    </header>
    <section class="cart_items">
        
    </section>
    <div class="cheaper-tag">
        <img width=85 height=30 src="../../../static/images/lowest-price.png"/>
        <div>You won't find it cheaper anywhere</div>
    </div>
    <footer id="cart-footer">
        <p class="promo">Promo code can be applied on payment page.</p>
        
        <button id="checkout-button"><span>Proceed to checkout</span> <span id="cart-value">Rs. 0</span></button>
        
    </footer>`;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    document.getElementById("cart-value").innerText = "Rs. "+ newValue;
  }
  static get observedAttributes() {
    return ["cart-value"];
  }
}

customElements.define("cart-component", CartWebComponent);
