import productJson from "../../server/products/index.get.json";
export function cart(target) {

    let cart; 
    let div = document.createElement('div');
    div.id = 'cart-div'
    let cartProdIds = [];
    if (!!(window.localStorage.getItem('cart'))) {
        cart = JSON.parse(window.localStorage.getItem('cart'));
        if(Object.keys(cart).length>0){

            let cartHeader = getCartHeader(cart);
            div.innerHTML = cartHeader;

            let cartAmount = 0;
            
            for (const product of productJson) {
                if(cart[product.id]){
                    cartProdIds.push(product.id);
                    const qty = cart[product.id];
                    cartAmount = cartAmount + qty * product.price;
                    let cartItem = createCartItem(product, qty)
                    div.innerHTML = div.innerHTML + cartItem;

                    //document.getElementById(`cart-qty-plus_${product.id}`).addEventListener('click',handleCartQtyPlus);
                    //document.getElementById(`cart-qty-minus_${product.id}`).addEventListener('click',handleCartQtyMinus);
                }
            }

            div.innerHTML = div.innerHTML + getCartFooter(cartAmount);
        }
        else{
            div.innerHTML = getEmptyCart();
        }

    } else {
        cart = {};
        div.innerHTML = getEmptyCart();
    }

    target.innerHTML = '';
    target.appendChild(div);

    for (const prodId of cartProdIds) {
        document.getElementById(`cart-qty-plus_${prodId}`).addEventListener('click',handleCartQtyPlus);
        document.getElementById(`cart-qty-minus_${prodId}`).addEventListener('click',handleCartQtyMinus);
    }
};

function handleCartQtyPlus(){
    const prodId = this.id.split('_')[1];
    let currentQty = parseInt(document.getElementById(`cart-qty_${prodId}`).innerText);
    let currentItemTotalPrice = parseInt(document.getElementById(`cart-item-total_${prodId}`).innerText);
    let currentItemPrice = currentItemTotalPrice/currentQty;

    let cartAmount = parseInt(document.getElementById(`cart-amount`).innerText);
    
    //limit max
    let limit = 10;
    for (const prod of productJson) {
        if(prod.id==prodId) limit = prod.stock;
    }
    if(currentQty+1 > limit){
        
    }
    else{
        //update cart
        document.getElementById(`cart-qty_${prodId}`).innerText = currentQty + 1;
        document.getElementById(`cart-item-total_${prodId}`).innerText = currentItemTotalPrice + currentItemPrice;
        document.getElementById(`cart-amount`).innerText = cartAmount + currentItemPrice;

        //update local storage
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart[prodId] = cart[prodId] + 1;
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function handleCartQtyMinus(){
    const prodId = this.id.split('_')[1];
    let currentQty = parseInt(document.getElementById(`cart-qty_${prodId}`).innerText);
    let currentItemTotalPrice = parseInt(document.getElementById(`cart-item-total_${prodId}`).innerText);
    let currentItemPrice = currentItemTotalPrice/currentQty;

    let cartAmount = parseInt(document.getElementById(`cart-amount`).innerText);
    
    //handle zero qty
    if(currentQty === 1){
        document.getElementById(prodId).remove();

        let cart = JSON.parse(window.localStorage.getItem('cart'));
        delete cart[prodId];
        window.localStorage.setItem('cart', JSON.stringify(cart));

        if(Object.keys(cart).length === 0){
            document.getElementById('cart-div').innerHTML = getEmptyCart();
        }
        else{
            //update cart
            document.getElementById(`cart-amount`).innerText = cartAmount - currentItemPrice;
            document.getElementById(`cart-header-count`).innerText = Object.keys(cart).length;
        }
        
    }
    else{
        //update cart
        document.getElementById(`cart-qty_${prodId}`).innerText = currentQty - 1;
        document.getElementById(`cart-item-total_${prodId}`).innerText = currentItemTotalPrice - currentItemPrice;
        document.getElementById(`cart-amount`).innerText = cartAmount - currentItemPrice;

        //update local storage
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart[prodId] = cart[prodId] - 1;
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }
    
}

function createCartItem(product, qty){
    let itemTemplate = `
    <div class="col s12 container cart-item-card" id=${product.id}>
        
        <div class= "row card-panel">
            <div class="col s1 card-image">
                <img src="..${product.imageURL}" class="responsive-img cart-item-image">
            </div>
            <div class="col s11 card-content">
                <div class="">${product.name}</div>
                <div class="cart-item-description">
                <div class="col s8">
                    <button id="cart-qty-minus_${product.id}" class="waves-effect waves-light btn teal cart-qty-minus-button">-</button>
                         <span id="cart-qty_${product.id}">${qty}</span>
                    <button id="cart-qty-plus_${product.id}" class="waves-effect waves-light btn teal cart-qty-plus-button">+</button>
                         x Rs. ${product.price}
                </div>
                <div id="cart-item-total_${product.id}" class="col s4 right-align">${product.price*qty}</div>
                </div>
            </div>
            
        </div>

    </div>`;

    return itemTemplate;
}

function getCartHeader(cart){
    return `
         <div class="chip full-width" id="cart-header">
             My Cart (<span id="cart-header-count">${Object.keys(cart).length}</span> items)
         </div>
         `;
 }

function getCartFooter(cartAmount){
   return `
        <div class="container">
            <button class="btn teal full-width waves-effect waves-light">
                <span class="float-left">Proceed to checkout</span>
                <span class="float-right">Rs. <span id="cart-amount">${cartAmount}</span></span></button>
        </div>
        `;
}

function getEmptyCart(){
    let cartHeader = getCartHeader({});
    let emptyCartTemplate = cartHeader + `<div class='container center-align empty-cart-content'>
                                <b>No items in your cart</b>
                                <div>Your favourite items are just a click away.</div>
                            </div>`;
    return emptyCartTemplate;
}