const template = document.createElement('template');
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
            color: black;
            margin-left: 10px;
        }
        .home-products {
            font-size: 14px;
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
            <a href="./home.html"><img src="../../static/images/logo.png" alt="Sabka Bazar logo"></a>
            <div class="home-products">
                <a href="./home.html">Home</a>
                <a href="./products.html">Products</a>
            </div>
        </div>
        <div class="right-section">
            <div class="register-signin">
                <a href="./signin.html">SignIn</a>
                <a href="./register.html">Register</a>
            </div>
            <div>
                <a href="./cart.html" class="cart">
                    <img src="../../static/images/cart.svg" alt="cart-logo" />
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
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.cartCount = this.shadowRoot.querySelector('#cart-count');
    }

    connectedCallback() {
    }

    static get observedAttributes() { return ['count']; }

    attributeChangedCallback(attribute, oldValue, newValue) {
        this.cartCount.textContent = `${+newValue || localStorage.getItem('count') || '0'} items`;
    }

}

window.customElements.define('uc-header', Header);