import { SBLocalStorage } from "../services/sbLocalStorage.js";

export class Cart {

    constructor() {
        this.sbLocalStorage = new SBLocalStorage();
    }

    fetchCartItems() {
        // localStorage.clear();
        const cartItemsList = this.sbLocalStorage.getItem("cartItems");

        const cartBody = document.getElementsByClassName("cart-body")[0];
        const cartFooter = document.getElementsByClassName("cart-footer")[0];

        if (cartItemsList && cartItemsList.length > 0) {
            cartBody.style.display = "block";
            this.updateCartHeader(cartItemsList.length);
            this.updateCartItems(cartItemsList, cartBody);

            this.updateCartTotal();

            // Remove empty cart element to dom
            const cartEmptyDiv = cartBody.getElementsByClassName("cart-empty")[0];
            cartEmptyDiv.style.display = "none";
            
        } else {
            // Remove cart items element from dom
            const cartItemsDiv = cartBody.getElementsByClassName("cart-items")[0];
            cartItemsDiv.style.display = "none";

            // Add empty cart element to dom
            const cartEmptyDiv = cartBody.getElementsByClassName("cart-empty")[0];
            cartEmptyDiv.style.display = "block";

            // 
            const promocode = cartFooter.getElementsByClassName("promocode-text")[0];
            promocode.style.display = "none";

            // 
            const subBtn = cartFooter.getElementsByClassName("cart-submit-btn")[0];
            subBtn.style.display = "none";

            // 
            const emptyBtn = cartFooter.getElementsByClassName("cart-empty-btn")[0];
            emptyBtn.style.display = "inline-block";
            emptyBtn.addEventListener('click', () => this.showProducts());
        }
    }

    updateCartHeader(cartItemsCount) {
        const cartHeader = document.getElementsByClassName("cart-header")[0];
        const countDiv = cartHeader.getElementsByClassName("cart-items-count")[0];
        countDiv.innerText = `( ${cartItemsCount} ) Items`;
    }

    updateCartItems(cartItemsList, cartBody) {
        const cartItemsDiv = cartBody.getElementsByClassName("cart-items")[0];
        cartItemsDiv.innerHTML = "";

        for (let index = 0; index < cartItemsList.length; index++) {
            const item = cartItemsList[index];

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            const itemContent = `
            <img src="${item.imageURL}" alt="" class="item-img">
            <div class="item-info">
                <h2 class="item-title">${item.name}</h2>
                <div class="item-actions">
                    <div class="decrease">
                        <svg xmlns="http://www.w3.org/2000/svg" class="decrease-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                          </svg>
                    </div>
                    <div class="item-quantity">
                        1
                    </div>
                    <div class="increase">
                        <svg xmlns="http://www.w3.org/2000/svg" class="increase-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                    </div>
                    <div class="multiply">
                        <svg xmlns="http://www.w3.org/2000/svg" class="multiply-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                    </div>
                    <div class="item-price">Rs.<span class="item-amount">${item.price}</span></div>
                </div>
            </div>
            <div class="item-total-price">Rs.<span class="item-total-amount">${item.price}</span></div>
            `;

            cartItem.innerHTML = itemContent;
            cartItemsDiv.appendChild(cartItem);

            const decreaseBtn = cartItem.getElementsByClassName("decrease")[0];
            decreaseBtn.addEventListener('click', () => this.decreaseItemQuantity(index));

            const increaseBtn = cartItem.getElementsByClassName("increase")[0];
            increaseBtn.addEventListener('click', () => this.increaseItemQuantity(index));
        }

    }

    decreaseItemQuantity(index) {
        let cartItem = document.getElementsByClassName("cart-item")[index];
        let quantityElement = cartItem.getElementsByClassName('item-quantity')[0];
        let count = Number(quantityElement.innerText);
        count = count === 1 ? count : --count;
        quantityElement.innerText = count;
        this.updateItemTotal(index, count);
        this.updateCartTotal();
    }

    increaseItemQuantity(index) {
        let cartItem = document.getElementsByClassName("cart-item")[index];
        let quantityElement = cartItem.getElementsByClassName('item-quantity')[0];
        let count = Number(quantityElement.innerText);
        quantityElement.innerText = ++count;
        this.updateItemTotal(index, count);
        this.updateCartTotal();
    }

    updateItemTotal(index, quantity) {
        let cartItem = document.getElementsByClassName("cart-item")[index];
        let amountElement = cartItem.getElementsByClassName('item-amount')[0];
        const amount = Number(amountElement.innerText);

        let amountTotalElement = cartItem.getElementsByClassName('item-total-amount')[0];
        amountTotalElement.innerText = amount * quantity;
    }

    updateCartTotal() {
        let itemTotalElements = document.getElementsByClassName('item-total-amount');
        let cartTotal = 0;
        for (let index = 0; index < itemTotalElements.length; index++) {
            const element = itemTotalElements[index];
            cartTotal += Number(element.innerText);
        }
        let cartTotalElement = document.getElementsByClassName('cart-total-amount')[0];
        cartTotalElement.innerText = cartTotal;
    }

    showProducts() {
        location.href = "/src/products/products.html";
    }
}