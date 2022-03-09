const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container {
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-left {
            min-width: 30%;
            display: flex;
            align-items: end;
            padding: 8px 10px;
            justify-content: space-between;
        }
        .header-left img {
            height: 50px;
        }
        .header-left img:hover {
            opacity:0.8;
        }
        .right-section {
            margin-right: 30px;
        }
        .right-section img {
            height: 30px;
            color: red;
            padding-right: 5px;
        }
        button:hover {
            cursor: pointer;
            opacity:0.8;
        }
        .cart {
            font-size: 14px;
            padding: 5px 20px;
            background: #dee0df;
            text-decoration: none;
            border: none;
            display:flex;
            align-items: center;
        }
        .register-signin {
            margin: 7px 0px;
            font-size: 12px; 
            float: right;
        }
        a {
            text-decoration: none;
            color: gray;
            margin-left: 10px;
        }
        a:hover {
            text-decoration: underline;
        }
        .home-products {
            font-size: 14px;
        }
        .cartIcon{
            filter: invert(30%) sepia(86%) saturate(5813%) hue-rotate(314deg) brightness(85%) contrast(89%);;
        }
        @media only screen and (max-width: 600px) {
            .home-products , .register-signin {
              display: none;
            }
            .right-section img {
                height: 60px;
            }
        }
    </style>
    <div class="container">
        <div class="header-left">
            <a href="../../../client/pages/home/home.html"><img src="../../../static/images/logo.png" alt="Sabka Bazar logo"></a>
            <div class="home-products">
                <a href="../../../client/pages/home/home.html">Home</a>
                <a href="../../../client/pages/products/products.html">Products</a>
            </div>
        </div>
        <div class="right-section">
            <div class="register-signin">
                <a href="../../../client/pages/login/login.html">SignIn</a>
                <a href="../../../client/pages/register/register.html">Register</a>
            </div>
            <div>
                <a href="../../../client/pages/cart/cart.html" class="cart">
                    <img src="../../../static/images/cart.svg" alt="cart-logo" class="cartIcon" />
                    <span id="cart-count"></span>
                </a>
            </div>
        </div>
    </div>
`;

class Header extends HTMLElement {
  cartCount;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.cartCount = this.shadowRoot.querySelector("#cart-count");
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    this.cartCount.textContent = `${
      +newValue || localStorage.getItem("count") || "0"
    } items`;
  }
}

window.customElements.define("uc-header", Header);
