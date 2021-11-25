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

        .header-right {
            margin-right: 30px;
        }
      
        .Red_Cart {
            height: 30px;
            padding-right: 5px;
            filter: invert(26%) sepia(47%) saturate(2793%) hue-rotate(316deg) brightness(86%) contrast(97%);
        }

       
        .cart {
            font-size: 14px;
            padding: 5px 20px;
            background: #eeeeee;
            text-decoration: none;
            border: none;
            display:flex;
            align-items: center;
        }

        .User_Login {
            margin: 7px 0px;
            font-size: 12px; 
            float: right;
        }

        button:hover {
            cursor: pointer;
            opacity:0.8;
        }

        .home-products {
            font-size: 14px;
            padding: 10px
        }

        a {
            text-decoration: none;
            color: black;
            margin-left: 20px;
        }
       
        @media only screen and (max-width: 600px) {
            .home-products , .User_Login {
              display: none;
            }
            .header-right img {
                height: 60px;
            }
        }
    </style>
    <div class="container">
        <div class="header-left">
            <a href="./home.html"><img src="../../static/images/logo.png" alt="Sabka Bazar logo"></a>
            <div class="home-products">
                <a href="./home.html">Home</a>
                <a href="./product.html">Products</a>
            </div>
        </div>
        <div class="header-right">
            <div class="User_Login">
                <a href="./signin.html">SignIn</a>
                <a href="./Signup.html">Register</a>
            </div>
            <div>
                <a href="./carts.html" class="cart">
                    <img src="../../static/images/cart.svg" alt="cart-logo" class="Red_Cart" />
                    <span id="Cart_Item_Count"></span>
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
    this.cartCount = this.shadowRoot.querySelector("#Cart_Item_Count");
  }

  connectedCallback() {}

  attributeChangedCallback(attribute, oldValue, newValue) {
    this.cartCount.textContent = `${
      +newValue || localStorage.getItem("count") || "0"
    } items`;
  }

  static get observedAttributes() {
    return ["count"];
  }
}

window.customElements.define("uc-header", Header);
