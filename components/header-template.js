class HeaderTemplate extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <header>
        <nav class="nav" role="navigation">
            <a href="index.html"><img class="nav__logo" src="../static/images/logo.png" alt="Sabka Bazaar Logo" /></a>
            <ul class="nav__bar">
                <li class="nav__bar--link"><a href="index.html">Home</a></li>
                <li class="nav__bar--link"><a href="products.html">Products</a></li>
            </ul>
            <div class="nav__end">
                <div class="nav__end-register-box">
                    <a class="nav__end-register-box--link" href="login.html">Sign In</a>
                    <a class="nav__end-register-box--link" href="register.html">Register</a>
                </div>
                <div class="nav__end-cart" tabindex="0">
                    <button id="cartButton" tabindex="-1" aria-label="Show Cart items"> <svg class="nav__end-cart--logo"
                            version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"
                            style="enable-background:new 0 0 24 24;" xml:space="preserve">
                            <path
                                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg> </button>
                    <div class="nav__end-cart--count"></div>
                </div>
            </div>
            <div class="menu-toggle">
                <input type="checkbox" id="toggle" /> <label for="toggle">Menu items</label>
                <span></span>
                <span></span>
                <span></span>
                <ul class="menu">
                    <a href="index.html">
                        <li class="menu--link">Home</li>
                    </a>
                    <a href="products.html">
                        <li class="menu--link">Products</li>
                    </a>
                    <a href="login.html">
                        <li class="menu--link">Sign In</li>
                    </a>
                    <a href="register.html">
                        <li class="menu--link">Register</li>
                    </a>
                </ul>
            </div>
        </nav>


    </header>
        `
    }


}

customElements.define('header-template', HeaderTemplate);

