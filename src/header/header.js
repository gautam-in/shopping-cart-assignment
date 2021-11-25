import { Cart } from "../cart/cart.js";
import { SBLocalStorage } from "../services/sbLocalStorage.js";

import { headerTemplate } from "../common-templates/header.js";

const headerEle = document.getElementById("main-header");
headerEle.innerHTML = headerTemplate;

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

        const user = this.sbLocalStorage.getItem("user");

        if (user === "true") {
            const cart = new Cart();
            cart.fetchCartItems();            
        } else {
            const cartBody = document.getElementsByClassName("cart-body")[0];
            // Remove cart items element from dom
            const cartItemsDiv = cartBody.getElementsByClassName("cart-items")[0];
            cartItemsDiv.style.display = "none";

            // Add empty cart element to dom
            const cartEmptyDiv = cartBody.getElementsByClassName("cart-empty")[0];
            cartEmptyDiv.style.display = "block";
            cartEmptyDiv.innerText = "Login to access your cart.";
            
            // Remove cart items element from dom
            const cartFooterDiv = cartBody.parentElement.getElementsByClassName("cart-footer")[0];
            cartFooterDiv.style.display = "none";
        }

    }

    closeCart() {
        const backdrop = document.getElementsByClassName('backdrop')[0];
        backdrop.style.display = "none";

        const cartContainer = document.getElementsByClassName('cart-container')[0];
        cartContainer.style.display = "none";
    }
}

const h = new Header();
const user = h.sbLocalStorage.getItem("user");
if (user) {
    h.updateCartItemsCount();
}

const cartBtn = document.getElementsByClassName('cart')[0];
cartBtn?.addEventListener('click', h.openCart.bind(h));

const menuEle = document.getElementsByClassName('menu')[0];
menuEle?.addEventListener('click', h.toggleMenu);
