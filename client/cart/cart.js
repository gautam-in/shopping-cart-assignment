window.addEventListener("DOMContentLoaded", fetchCartItems);

function fetchCartItems(){
    let cartHeaderEl = document.querySelector('.cart-header');
    let cartHeader = document.createElement('p');
    cartHeader.textContent = "My Cart (" + localStorage.length + " items)";

    let cartClose = document.createElement('p');
    cartClose.textContent = "X";
    cartHeaderEl.appendChild(cartHeader);
    cartHeaderEl.appendChild(cartClose);

    let cartItemsEl = document.querySelector('.cart-items');
    let cartItemsTotalPriceEl = document.querySelector('.cart-total-price');

    let totalPrice = 0;

    for(let item = 0; item < localStorage.length; item++){
        totalPrice += JSON.parse(localStorage.getItem(localStorage.key(item))).buyingPrice;
        let cartItemEl = createLayout(JSON.parse(localStorage.getItem(localStorage.key(item))));
        cartItemsEl.appendChild(cartItemEl);
    }

    cartItemsTotalPriceEl.textContent = "Rs." + totalPrice + " >";

}

function createLayout(productDetails){
    let cartItem = document.createElement('div');
    cartItem.classList.add('card');
    let cartItemBody = document.createElement('div');
    cartItemBody.classList.add('card-body');

    let cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item-div','cart-card');
    
    let cartItemImg = document.createElement('img');
    cartItemImg.classList.add('cart-item-img');
    cartItemImg.src = productDetails.imageURL;
    cartItemImg.alt = productDetails.name + " Image";

    let cartItemProductDiv = document.createElement('div');
    cartItemProductDiv.classList.add('cart-item-product-div');
    
    let cartItemName = document.createElement('h5');
    cartItemName.classList.add('cart-item-name');
    cartItemName.textContent = productDetails.name;

    let cartItemPurchaseDetails = document.createElement('div');
    cartItemPurchaseDetails.classList.add('cart-item-purchase-details');

    let cartItemAddBtn = document.createElement('button');
    cartItemAddBtn.classList.add('cart-item-btn');
    cartItemAddBtn.textContent = "+";

    let cartItemQuantity = document.createElement('span');
    cartItemQuantity.classList.add('cart-item-quantity');
    cartItemQuantity.textContent = productDetails.quantity;

    let cartItemMinusBtn = document.createElement('button');
    cartItemMinusBtn.classList.add('cart-item-btn');
    cartItemMinusBtn.textContent = "-";

    let cartItemPriceMultiples = document.createElement('span');
    cartItemPriceMultiples.classList.add('cart-item-price-multiples');
    cartItemPriceMultiples.textContent = "X  Rs."+ productDetails.price ;

    let cartItemPrice = document.createElement('span');
    cartItemPrice.classList.add('cart-item-price');
    cartItemPrice.textContent = "Rs." + productDetails.price * productDetails.quantity;

    cartItemPurchaseDetails.appendChild(cartItemAddBtn);
    cartItemPurchaseDetails.appendChild(cartItemQuantity);
    cartItemPurchaseDetails.appendChild(cartItemMinusBtn);
    cartItemPurchaseDetails.appendChild(cartItemPriceMultiples);
    cartItemPurchaseDetails.appendChild(cartItemPrice);

    cartItemProductDiv.appendChild(cartItemName);
    cartItemProductDiv.appendChild(cartItemPurchaseDetails);

    cartItemDiv.appendChild(cartItemImg);
    cartItemDiv.appendChild(cartItemProductDiv);

    return cartItemDiv;
}