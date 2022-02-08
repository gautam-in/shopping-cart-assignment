export class Header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header class='header'>
        <section>
        <img class='header-logo' src='../../static/images/logo.png' alt='sabka bazar logo'/>
        </section>
        <nav class="center-nav">
        <a href='./index.html' style='padding : 10px;'>Home</a>
        <a style='padding : 10px;' href='./products.html'>Products</a>
        </nav>
        <section>
        <div style='display : flex; justify-content : space-between; padding : 6px 5px'>
        <a href='./login.html'>Login</a>
        <a href='./register.html'>Register</a>
        </div>
        <section id='items-cart'>
        <img 
        id="cart-btn"
        role="button"
        aria-label="View Cart"
        tabindex="0"
        src="../../static/images/cart.svg"
        alt="cart icon"/>
        <p style='font-size : 1rem; padding-right : 10px'>
        ${window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')).length : 0} 
        Items
        </p>
        </section>
        </section>
        </header>
        `;

        document.getElementById('cart-btn').addEventListener('click', showCart);
        
        function showCart(){
            let modal = document.createElement('custom-modal');
            document.body.appendChild(modal);
            modal.setAttribute('cartitems', window.localStorage.getItem('cart'));
            let customModal = document.querySelector('custom-modal');
            customModal.setAttribute('cartitems', window.localStorage.getItem('cart'));
        }
    }
}