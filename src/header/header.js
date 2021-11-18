import { Cart } from "../cart/cart.js";
import { SBLocalStorage } from "../services/sbLocalStorage.js";

export class Header {

    constructor() {
        this.sbLocalStorage = new SBLocalStorage();
    }

    toggleMenu(event, isRemove) {
        let sideNav = document.getElementsByClassName('main-side-nav')[0];
        sideNav.classList.toggle('show');

        if (isRemove) {
            sideNav.classList.remove('show');
        }
        if (event) {
            event.stopPropagation();
        }
    }    

    updateCartItemsCount() {
        const cartItems = this.sbLocalStorage.getItem("cartItems");
        const itemsCount = cartItems ? cartItems.length : 0;
        const mainHeader = document.getElementsByClassName("main-header")[0];
        const cartCountEle = mainHeader.getElementsByClassName("cart-item-count")[0];
        cartCountEle.innerText = itemsCount;
    }

    openCart() {
        const backdrop = document.getElementsByClassName('backdrop')[0];
        backdrop.style.display = "block";

        const cartContainer = document.getElementsByClassName('cart-container')[0];
        cartContainer.style.display = "block";

        const cartClose = cartContainer.getElementsByClassName("cart-close")[0];
        cartClose.addEventListener('click', () => new Header().closeCart());

        const cart = new Cart();
        cart.fetchCartItems();
    }

    closeCart() {
        const backdrop = document.getElementsByClassName('backdrop')[0];
        backdrop.style.display = "none";

        const cartContainer = document.getElementsByClassName('cart-container')[0];
        cartContainer.style.display = "none";
    }
}

const h = new Header();
h.updateCartItemsCount();

const menuEle = document.getElementsByClassName('menu')[0];
menuEle?.addEventListener('click', h.toggleMenu);

const cartBtn = document.getElementsByClassName('cart')[0];
cartBtn?.addEventListener('click', h.openCart);
