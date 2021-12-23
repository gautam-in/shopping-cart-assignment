
let cart = JSON.parse(sessionStorage.getItem('cart'))||[];
let products = [];
let totalPrice = null;
let categories = [];

async function loadData() {
    try {
        await loadCategories();
        await loadProducts();
        initalCartSetUP()
    }catch(error) {
        console.log('error',error);
    }
    
}

async function loadCategories() {
    try {
        const response  = await fetch(API_PATH.categoriesUrl);
        categories = await response.json();
    } catch(error){
        console.log("error",error);
    }    

}

//function to load products initially
async function loadProducts() {
    try {
        const response = await fetch(API_PATH.productsUrl); 
        products = await response.json();
    }catch(error) {
        console.log("error", error);
    }
    
}



// let headerSeaction = document.querySelector('.header-container');
//  headerSeaction.innerHTML = `<div class="container">
//     <div class="d-flex">
//     <div class="logo">
//         <a href="index.html" class="logo-link " href="/public/index.html">
//         <img src="/static/images/logo.png" alt="Sabka Bazar logo- Click yo navigate to home page" />
//         </a>
//     </div>
//     <div class="nav-bar">
//         <nav>
//         <ul>
//             <li class="nav-link"><a  href="/public/index.html"> Home</a></li>
//             <li class="nav-link"><a href="/public/products.html">Products</a></li>
//         </ul>
//         </nav>
//     </div>
//     </div>
//     <div class="side-menu">
//     <div class="user-auth-links">
//         <a href="/public/login.html">SignIn</a>
//         <a href="/public/register.html">Register</a>
//     </div>
//     <div class="cart-container">
//         <button type="button" id="cartButton" class="btn">
//         <img src="/static/images/cart.svg" alt="Cart icon" />
//         <span id="headerItemCount">0 Items</span>
//         </button>

//         <div id="cartPopupTemplate">
//         <div class="cart-popup d-none">
//             <div class="cart-header">
//             <div class="my-cart-title">
//                 <span>My Cart</span>
//                 <span id="cartItemsCount"></span>
//             </div>
//             <button id="cartBtnClose" type="button" class="btn-close btn-close-white" aria-label="close cart popup">
//             </button>
//             </div>
//             <div class="cart-content">
//             <div class="cartContentWithItems ">
//                 <div class="cart-items-container">
//                 </div>
//                 <div class="cart-ad">
//                 <img src="/static/images/lowest-price.png" alt="Lowest price guaranteed image">
//                 <div>You won't find it cheaper anywhere</div>
//                 </div>
//             </div>

//             <div class="cartContentWithoutItems ">
//                 <div class="no-items-text">No items in your cart</div>
//                 <div class="no-items-text-2">Your favourite items are just a click away</div>
//             </div>
//             </div>
//             <div class="cart-footer">
//             <div class="cartFooterWithItems">
//                 <div class="promo-info">Promo code can be applied on payment page</div>
//                 <button id="proceedCheckout" type="button" class="btn btnCrimsonPink"
//                 aria-label="Proceed to Checkout">
//                 <span>Proceed to Checkout</span>
//                 <span id="totalAmount"></span>
//                 </button>
//             </div>
//             <div class="cartFooterWithoutItems ">
//                 <button id="startShopingBtn" type="button" class="btn btnCrimsonPink">
//                 Start Shopping
//                 </button>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//     </div>
//     </div>`;

// let cartHeaderElement = document.querySelector('#cartItemsCount');
// let cartIconCount = document.querySelector('#headerItemCount');
// let cartFooterWithItems = document.querySelector('.cartFooterWithItems');
// let cartFooterWithoutItems = document.querySelector('.cartFooterWithoutItems');

// let cartContentWithItems = document.querySelector('.cartContentWithItems');
// let cartContentWithoutItems = document.querySelector('.cartContentWithoutItems');



//  function initalCartSetUP() {
//     if(cart.length === 0) {
//         cartHeaderElement.textContent = '';
//         cartContentWithItems.classList.add('d-none');
//         cartFooterWithItems.classList.add('d-none');
//         cartContentWithoutItems.classList.remove('d-none');
//         cartFooterWithoutItems.classList.remove('d-none');
//      } else {
//         let cartItemContainer = document.querySelector('.cart-items-container');
//         cartContentWithoutItems.classList.add('d-none');
//         cartFooterWithoutItems.classList.add('d-none');
//         cartContentWithItems.classList.remove('d-none');
//         cartFooterWithItems.classList.remove('d-none');
    
//         cart.forEach(item => {
//             let productDetails = products.find( product => product.id === item.id );
//             addProductDetailsInCart({...productDetails,quantity: item.quantity},cartItemContainer);
//         }) 
//         updateTotalAmount();
//         cartHeaderElement.textContent = `(${cart.length} items)`  
//         cartIconCount.textContent = `(${cart.length} items)`;
//      }
//  }

// function updateCartSetUp(item) {
//     let cartItemContainer = document.querySelector('.cart-items-container');
//     cartContentWithoutItems.classList.add('d-none');
//     cartFooterWithoutItems.classList.add('d-none');
//     cartContentWithItems.classList.remove('d-none');
//     cartFooterWithItems.classList.remove('d-none');
    

//     cart.push(item);
    
//     let productDetails = products.find( product => product.id === item.id );
//     addProductDetailsInCart({...productDetails,quantity: item.quantity},cartItemContainer);
//     cartHeaderElement.textContent = `(${cart.length} items)`  
//     cartIconCount.textContent = `(${cart.length} items)`;
//     updateTotalAmount();
//     sessionStorage.setItem('cart',JSON.stringify(cart));

// }

// function updateTotalAmount () {
//    let totalAmount = cart.reduce((acc,item) => {
//         let productDetails = products.find( product => product.id === item.id );
//         console.log(productDetails);
//         return acc + (productDetails.price * item.quantity);
//    },0);

//    document.querySelector('#totalAmount').textContent = totalAmount;

// }

// function addProductDetailsInCart(product,parentContainer) {
//     const cartItem = document.createElement('div');
//     cartItem.className = 'cart-item'

//     const imgParent = document.createElement('div');
//     imgParent.className = 'align-self-center';

//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product.imageURL);
//     productImg.setAttribute('alt', `Product image of ${product.name}`);
//     productImg.setAttribute('class', 'product-image-cart');
//     imgParent.appendChild(productImg);
//     cartItem.appendChild(imgParent);

//     const cartItemDetails = document.createElement('div');
//     cartItemDetails.setAttribute('class','cart-item-details');

//     const cartItemName = document.createElement('div');
//     cartItemName.setAttribute('class','cart-item-name');
//     cartItemDetails.appendChild(cartItemName);

//     const cartItempricing = document.createElement('div');
//     cartItempricing.setAttribute('class','cart-item-pricing');

//     const quantityPrice = document.createElement('div');
//     quantityPrice.setAttribute('class','quantity-price');

//     const minusbutton = document.createElement('button');
//     minusbutton.setAttribute('class','btn btnCrimsonPink plusMinusBtn');
//     minusbutton.setAttribute('data-id',product.id);
//     minusbutton.setAttribute('type','button');

//      const minusImg = document.createElement('img');
//      minusImg.setAttribute('src','/static/images/minus-math.png');
//      minusImg.setAttribute('alt','Minus image');
//      minusbutton.appendChild(minusImg);
//      quantityPrice.appendChild(minusbutton);

//      const quantityNos = document.createElement('span');
//      quantityNos.setAttribute('class','quantity-nos');
//      quantityNos.textContent = product.quantity;
//      quantityPrice.appendChild(quantityNos);

//     const plusbutton = document.createElement('button');
//     plusbutton.setAttribute('class','btn btnCrimsonPink plusMinusBtn');
//     plusbutton.setAttribute('data-id',product.id);
//     plusbutton.setAttribute('type','button');

//      const plusImg = document.createElement('img');
//      plusImg.setAttribute('src','/static/images/plus-math.png');
//      plusImg.setAttribute('alt','Minus image');
//      plusbutton.appendChild(plusImg);
//      quantityPrice.appendChild(plusbutton);

//      const  mutilplyImg =  document.createElement('img');
//      mutilplyImg.setAttribute('src','/static/images/multiply.png');
//      mutilplyImg.setAttribute('alt','Multiplication image');
//      mutilplyImg.setAttribute('class','multiply-img');
//      quantityPrice.appendChild(mutilplyImg);

//      const priceSpan = document.createElement('span');
//      priceSpan.textContent = ` ₹.${product.price}`;
//     quantityPrice.appendChild(priceSpan);
    
//     const totalItemPrice = document.createElement('div');
//     totalItemPrice.setAttribute('class','total-item-price');
//     totalItemPrice.innerText = `₹.${ product.quantity * product.price}`;
    
//     cartItempricing.appendChild(quantityPrice);
//     cartItempricing.appendChild(totalItemPrice);
//     cartItemDetails.appendChild(cartItempricing);
//     cartItem.appendChild(cartItemDetails);
//     parentContainer.appendChild(cartItem);


// //     parentContainer.innerHTML =`<div class="cart-item">
// //     <div class="align-self-center">
// //     <img class="product-image-cart" src="${product.imageURL}"
// //         alt="Product image of ${product.name}">
// //     </div>
// //     <div class="cart-item-details">
// //     <div class="cart-item-name">${product.name}</div>
// //     <div class="cart-item-pricing">
// //         <div class="quantity-price">
// //         <button type="button" class="btn btnCrimsonPink plusMinusBtn"
// //             aria-label="Decrement item quantity of ${product.name}" data-action="minus"
// //             data-id="ProductId">
// //             <img src="/static/images/minus-math.png" alt="Minus image">
// //         </button>
// //         <span class="quantity-nos">${product.quantity}</span>
// //         <button type="button" class="btn btnCrimsonPink plusMinusBtn"
// //             aria-label="Increment item quantity of Productname" data-action="plus"
// //             data-id="ProductId">
// //             <img src="/static/images/plus-math.png" alt="Plus image">
// //         </button>
// //         <img class="multiply-img" src="/static/images/multiply.png" alt="Multiplication image">
// //           ₹.${product.price}
// //         </div>
// //         <div class="total-item-price">₹.${ product.quantity * product.price}</div>
// //     </div>
// //     </div>
// // </div>`
// }

// function  showOrHidecart() {
//     document.querySelector('.cart-popup').classList.toggle('d-none');
//     const isHide = document.querySelector('.cart-popup').classList.contains('d-none');
// }



// $(function(){
//     var current = location.pathname;
//     $('.nav-bar li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('link-active');
//         }
//     })

//     $('.user-auth-links a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('link-active');
//         }
//     })
    
// })

// document.querySelector('.cart-container').addEventListener('click', showOrHidecart);

$(function(){
    var current = location.pathname;
    $('.nav-bar li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('link-active');
        }
    })

    $('.user-auth-links a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('link-active');
        }
    })
    
})
loadData();

    