class Header extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    header {
      display: flex;
      width: 100%;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.034);
    }
    #skipLink {
      background: #cf0154;
      color: #fff;
      font-weight: 700;
      left: 10px;
      padding: 10px;
      position: absolute;
      transform: translateY(-1000%);
      transition: transform 0.3s;
    }
    #skipLink:focus {
      transform: translateY(0%);
    }
    nav {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #nav__logo {
      padding: 10px;
    }
    .nav__links {
      text-decoration: none;
      color: black;
      padding: 0 5px;
    }
    .nav__leftcontainer {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .nav__rightcontainer {
      display: flex;
      height: 100%;
      flex-direction: column;
      gap: 10px;
      justify-content: flex-end;
    }
    .nav__cart__container {
      display: flex;
      gap: 10px;
      align-items: center;
      background-color: #eee;
      padding: 10px;
      cursor: pointer;
    }
    @media screen and (max-width: 480px){
      nav{
          width: 100%
      }
      #nav__logo{
          height: 50px;
          // margin: 0 15px 0 0;
      }
      .nav__leftcontainer, .nav__rightcontainer{
        gap:5px;
      }
      .nav__links{
          padding: 0 10px 0 0;
      }
      .nav__auth__links{
        display:flex;
      }
  }
  </style>
  <header>
  <a id="skipLink" href="#mainContent">Skip to Content</a>
  <nav>
    <div class="nav__leftcontainer">
      <img
        src="../../../static/images/logo.png"
        id="nav__logo"
        alt="Sabka Bazaar Logo"
      />
      <a class="nav__links" href="../home/home.html">Home</a>
      <a class="nav__links" href="../products/products.html">Products</a>
    </div>
    <div class="nav__rightcontainer">
      <div class="nav__auth__links">
        <a class="nav__links" href="../login/login.html">Login</a>
        <a class="nav__links" href="../register/register.html">Register</a>
      </div>
      <div class="nav__cart__container">
        <img
          src="../../../static/images/cart.svg"
          height="30px"
          width="30px"
          alt="Cart icon"
        />
        <span id="cart-count">0 items</span>
      </div>
    </div>
  </nav>
</header>
        `;
  }
}

customElements.define("my-header", Header);
