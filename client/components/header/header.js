class Header extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._cart_count = this.getAttribute('cart-item') || 0
        this._shadowRoot.innerHTML = 
        `
        <style>
       .p1{
            margin-bottom: 0.5rem;
        }
            header{
                box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
                box-shadow: 0 8px 8px -4px rgb(0 0 0 / 20%);
            }
            nav{
                display: flex;
                justify-content: space-between;
                padding: 1rem;
            }
            #nav__logo{
                margin-right: 5rem;
                height: 75px;
            }
            .nav__links{
                text-decoration: none;
                color: black;
                padding: 0 15px 0px 0;
            }
            .nav__cart__container{
                background-color: #ddd6d6;
                padding: 10px;
                cursor: pointer;
            }
            .nav__rightcontainer{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-top: 10px;
            }
            .nav__leftcontainer{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            @media screen and (max-width: 480px){
                nav{
                    width: 100%
                }
                #nav__logo{
                    height: 50px;
                    margin: 0 15px 0 0;
                }
                .nav__links{
                    padding: 0 10px 0 0;
                }
            }
        </style>
        <header>
            <nav>
                <div class="nav__leftcontainer">
                    <img src="../../../static/images/logo.png" id="nav__logo" alt="Sabka Bazaar Logo"/>
                    <a class="nav__links" href="../home/home.html">Home</a>
                    <a class="nav__links" href="../products/products.html">Products</a>
                </div>
                <div class="nav__rightcontainer">
                    <div class="p1">
                        <a class="nav__links" href="../login/login.html">SignIn</a>
                        <a class="nav__links" href="../register/register.html">Register</a>
                    </div>
                    <div class="nav__cart__container" onclick="openCart()">
                        <img src="../../../static/images/cart.svg" height="30px" width="30px" alt="Item Cart"/>
                        <span id="cart-count">${this._cart_count} items</span>
                    </div>
                </div>
            </nav>
        </header>
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.getElementById('cart-count').innerText = newValue + ' items';
    }

    static get observedAttributes() { return ['cart-item']; }
}

customElements.define('uc-header', Header)