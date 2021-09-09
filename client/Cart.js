
var modal = document.getElementById("cart-modal");

var cartButton = document.getElementById('cart');

var span = document.getElementsByClassName("close")[0];

var backdrop = document.getElementsByClassName("backdrop")[0];






cartButton.addEventListener('click', function () {

    init();
    
});


function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

backdrop.addEventListener('click', closeModal);
span.addEventListener('click', closeModal);


function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCartItems(cartItems) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}



function populateCartItems(cartItems) {
    const $cartItemsContainer = getDomElement('#cartWithItems');
    $cartItemsContainer.innerHTML ='';
    let totalPrice =0;
    cartItems.forEach((item, index) => {
        displayCartItem(item, index);
        totalPrice+=item.totalPrice;
    });

    getDomElement('#checkout-total-price').innerHTML = 'Rs. '+totalPrice;
    
    $cartItemsContainer.innerHTML += `
        <div class="cart-item-discount">
            <div>
            <img  src="/static/images/lowest-price.png" />
            </div>

            <div>
            You won't find it cheaper anywhere
            </div>
        </div>
    `;

    setCartItems(cartItems);
}

function displayCartItem(cartItem, index) {
    const $cartItemsContainer = getDomElement('#cartWithItems');
    if(cartItem.stock - 1 > -1) {
        cartItem.quantity = 1;
    } 
    cartItem.totalPrice = cartItem.quantity * cartItem.price;

    $cartItemsContainer.innerHTML += `
        <div class="cart-item">
            <div class="cart-item-image">
                <img  src="${cartItem.imageURL}" width="20" height="20"/>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-info-name">
                   <b> ${cartItem.name}</b>
                </div>
                <div class="cart-item-info">
                    <button data-item-index="${index}" data-button-type="remove">-</button>
                    <span id="cart-item-quantity-${index}">${cartItem.quantity}</span>
                    <button data-item-index="${index}" data-button-type="add">+</button>
                     x Rs. ${cartItem.price}
                </div>
            </div>
            <div id="cart-item-totalPrice-${index}" class="cart-item-total-price">
                Rs. ${cartItem.totalPrice}
            </div>

        </div>
    `;

}


function initCartItemButtonListeners() {
    getDomElements('.cart-item-info button').forEach($element => {
        $element.addEventListener('click', (event) => {
            const buttonType = event.target.getAttribute("data-button-type");
            const index = +event.target.getAttribute("data-item-index");
            const cartItems = getCartItems();

            if(buttonType === 'add') {
                if(cartItems[index].quantity + 1 <= cartItems[index].stock) {
                    cartItems[index].quantity++;
                    cartItems[index].totalPrice = cartItems[index].price * cartItems[index].quantity;

                    getDomElement(`#cart-item-quantity-${index}`).innerHTML = cartItems[index].quantity;
                    getDomElement(`#cart-item-totalPrice-${index}`).innerHTML ='Rs. ' +  cartItems[index].totalPrice;
                    setCartItems(cartItems);
                }
            } else {
                if(cartItems[index].quantity - 1 > 0) {
                    cartItems[index].quantity--;
                    cartItems[index].totalPrice = cartItems[index].price * cartItems[index].quantity;

                    getDomElement(`#cart-item-quantity-${index}`).innerHTML = cartItems[index].quantity;
                    getDomElement(`#cart-item-totalPrice-${index}`).innerHTML = 'Rs. ' + cartItems[index].totalPrice;
                    setCartItems(cartItems);
                }
                
            }

            let totalPrice =0;
            cartItems.forEach((item) => {
                totalPrice+=item.totalPrice;
            });
        
            getDomElement('#checkout-total-price').innerHTML = 'Rs. '+totalPrice;


        });
    });
}

function getDomElement(selector) {
    return document.querySelector(selector);
}

function getDomElements(selector) {
    return document.querySelectorAll(selector);
}

function showElement(element) {
    element.style.display = "block";
}


function hideElement(element) {
    element.style.display = "none";
}

function init() {
    showElement(getDomElement('.cart-modal'));
    backdrop.style.display = "block";
    modal.style.display = "block";

    console.log('display called');
    const cartItems = getCartItems();
    getDomElement('#total-items').innerHTML = cartItems.length;

    if (cartItems && cartItems.length > 0) {
        hideElement(getDomElement('#emptyCart'));
        hideElement(getDomElement('.cart-start-shopping'));
        showElement(getDomElement('.cart-checkout'));
        showElement(getDomElement('#cartWithItems'));
        populateCartItems(cartItems);
        initCartItemButtonListeners();
    } else {
        showElement(getDomElement('#emptyCart'));
        showElement(getDomElement('.cart-start-shopping'));
        hideElement(getDomElement('#cartWithItems'));
        hideElement(getDomElement('.cart-checkout'));
    }
}





