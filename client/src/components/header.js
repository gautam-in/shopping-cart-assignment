class HeaderWebComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
        <img src="../../../static/images/logo.png" alt="Sabka Bazaar">

        <nav class="header_nav">
            <div>
            <a href="./home.html">Home</a>
            <a href="./products.html">Products</a>
            </div>
            <div>
            <a href="./login.html">Login</a>
            <a href="./register.html">Register</a>
            <img class="cartImage" src="../../../static/images/cart.svg" alt="cart">
            <span>0 Items</span>
            <div>
        </nav>
        
        
    </header>`
    }
  }
  
  customElements.define("header-component", HeaderWebComponent);