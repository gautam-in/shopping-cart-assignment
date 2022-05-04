
class HeaderWebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="main_header">
        <a href="./home.html"><img id="logo-img" src="../../../static/images/logo_2x.png" alt="Sabka Bazaar" width=200 height=90></a>

        <nav class="header_nav">
            <div class="left_nav">
              <a href="./home.html">Home</a>
              <a href="./products.html">Products</a>
            </div>
            <div class="right_nav">
              <div>
              <a href="./login.html">SignIn</a>
              <a href="./register.html">Register</a>
              </div>
            <div class="cart_nav">
              <img onclick="openCart()" class="cartImage" src="../../../static/images/cart.svg" alt="cart">
              <span id="item-total-count">0 Items</span>
            </div>
            </div>
        </nav>
        
        
    </header>`;
  }
  attributeChangedCallback(name, oldValue, newValue) {

    document.getElementById("item-total-count").innerText = newValue + " Items";
}



static get observedAttributes() { return ['cart_count']; }
  
}

customElements.define("header-component", HeaderWebComponent);
