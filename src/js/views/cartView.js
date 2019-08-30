import {
  elements
} from './base';

import {
  servicesData
} from '../models/Services';

import {
  renderFakeLoader,
  XHRLoader
} from './loaderView';

import {
  renderCartCount
} from '../views/headerCartCountView';

import {
  updateProductDetails
} from '../views/productsView';


export const renderCart = (render) => {

  let cartEmpty = null;
  let markup = null;
  if (servicesData.cartStatus.productDetails['id'] === null) {
    cartEmpty = true;
  } else {
    cartEmpty = false;
  }


  if (cartEmpty) {
    markup = `
    <section class="cart-load">
      <div class="header">
        <div class="centre">
          <div class="cart-count">My Cart</div>
          <i class="fa fa-times cart-close-button"></i>
        </div>
      </div>
      <div class="cart-empty-message">
      <h6>No Items in your Cart</h6>
      <span>Your favourite item is just click away</span>
      </div>

      <div class="cart-empty">
        <button>Start Shopping</button>
      </div>

    </section>
      `;

  } else {

    markup = `
    <section class="cart-load">
      <div class="header">
        <div class="centre">
          <div class="cart-count">My Cart (%%item-count%% item)</div>
          <i class="fa fa-times cart-close-button"></i>
        </div>
      </div>
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="%%item-image-url%%"></img>
      </div>

        <div class="cart-item-details">
          <h3> %%item-name%%</hr>
          <div class="cart-item-manipulation">
            <i id="add-item-cart" class="fa fa-plus-circle"></i>
            <span class="cart-item-quantity">%%item-count%%</span>
            <i id="remove-item-cart" class="fa fa-minus-circle"></i>
            <span class="cart-multiplier"><i class="fa fa-times"></i></span>
            <span class="cart-currency-symbol"><i class="fas fa-rupee-sign"></i></span>
            <span class="cart-item-price">%%item-price%%</span>
            <span class="cart-currency-symbol"><i class="fas fa-rupee-sign"></i></span>
            <span class="cart-final-price">%%item-final-price%%</span>
          </div>
        </div>

        <div class="cart-checkout">
          <span>Promocode can be applied on payment page</span>
          <button>Proceed To Checkout <span class="cart-currency-symbol"><i class="fas fa-rupee-sign"></i>
          <span id="cart-total-price">%%item-final-price%%</span></span></button>

        </div>

      </div>
      <div class="lowest-price">
        <img src="static/images/lowest-price.png" alt="Lowet Price">
      </div>
    </section>
      `;
    markup = markup.replace(/%%item-count%%/g, servicesData.cartStatus.productDetails['count']);
    markup = markup.replace('%%item-image-url%%', servicesData.cartStatus.productDetails['imageURL']);
    markup = markup.replace('%%item-name%%', servicesData.cartStatus.productDetails['name']);
    markup = markup.replace('%%item-price%%', servicesData.cartStatus.productDetails['price']);
    markup = markup.replace(/%%item-final-price%%/g, servicesData.cartStatus.productDetails['price'] * servicesData.cartStatus.productDetails['count']);
  }
  if (render) {
    elements.cart.innerHTML = markup;
    addElements();
    if (!elements.registerdEvents.CartPage.addItemEventStatus && !elements.registerdEvents.CartPage.removeItemEventStatus && servicesData.cartStatus.cartDetails.totalItemCount > 0) {
      registerEvents(true, addRemoveHandler);
    } else if (elements.registerdEvents.CartPage.addItemEventStatus && elements.registerdEvents.CartPage.removeItemEventStatus) {
      registerEvents(false, addRemoveHandler);
    }
    servicesData.cartStatus.cartDetails.onScreen = true;
    elements.cart.style.display = "block";
    // console.log(elements.cartView);
  } else {
    elements.cart.style.display = "none";
    servicesData.cartStatus.cartDetails.onScreen = false;
    if (elements.registerdEvents.CartPage.addItemEventStatus && elements.registerdEvents.CartPage.removeItemEventStatus) {
      registerEvents(false);
    }
  }

};

export const renderCartValues = () => {
  let markup = null;
  let finalPrice = null;
  if (servicesData.cartStatus.cartDetails.totalItemCount == 0) {
    markup = `
    <section class="cart-load">
      <div class="header">
        <div class="centre">
          <div class="cart-count">My Cart</div>
          <i class="fa fa-times cart-close-button"></i>
        </div>
      </div>
      <div class="cart-empty-message">
      <h6>No Items in your Cart</h6>
      <span>Your favourite item is just click away</span>
      </div>

      <div class="cart-empty">
        <button>Start Shopping</button>
      </div>

    </section>
      `;
    elements.cart.innerHTML = markup;
    registerEvents(false, addRemoveHandler);
    if (servicesData.cartStatus.cartDetails.onScreen) {
      renderCart(true);
      elements.cartView.closeButtonIcon.addEventListener('click', e => {
        renderCart(false);
      });
    }

  } else {
    finalPrice = servicesData.cartStatus.cartDetails.totalItemCount * servicesData.cartStatus.productDetails['price'];
    document.querySelector('.cart-item-quantity').innerHTML = servicesData.cartStatus.cartDetails.totalItemCount;
    document.querySelector('.cart-final-price').innerHTML = finalPrice
    document.querySelector('.cart-count').innerHTML = 'My Cart (' + servicesData.cartStatus.cartDetails.totalItemCount + ' Item)';
    document.querySelector('#cart-total-price').innerHTML = finalPrice;

  }


}
const addElements = () => {
  elements.cartView = {
    closeButtonIcon: document.querySelector('.cart-close-button'),
    cartSection: document.querySelector('.cart-load'),
    addItem: document.querySelector('#add-item-cart'),
    removeItem: document.querySelector('#remove-item-cart')
  };
};

export const registerEvents = (register, addRemoveHandler) => {

  if (register) {
    // Add Product
    elements.cartView.addItem.addEventListener('click', addRemoveHandler);
    elements.registerdEvents.CartPage.addItemEventStatus = true;

    // Remove Product
    elements.cartView.removeItem.addEventListener('click', addRemoveHandler);
    elements.registerdEvents.CartPage.removeItemEventStatus = true;

    console.log("register");

  } else {

    elements.cartView.addItem.removeEventListener('click', addRemoveHandler);
    elements.registerdEvents.CartPage.addItemEventStatus = false;

    elements.cartView.removeItem.removeEventListener('click', addRemoveHandler);
    elements.registerdEvents.CartPage.removeItemEventStatus = false;
    console.log("UNregister");

  }

};

const addRemoveHandler = (event) => {

  switch (event.target.id) {
    case "add-item-cart":
      updateProductDetails('updateAdd', servicesData.cartStatus.productDetails.id);
      renderCartCount();
      renderCartValues();

      break;
    case "remove-item-cart":
      if (servicesData.cartStatus.cartDetails.totalItemCount > 0) {
        updateProductDetails('updateRemove', servicesData.cartStatus.productDetails.id);
        renderCartCount();
        renderCartValues();
      }

      break;
  }

};
// <section class="products">
//   <div class="products-menu">
//     <ul>
//       <li><a href="#category?id=">Fruits & Vegetables</a></li>
//       <li><a href="#">Bakery Cake & Dairy</a></li>
//       <li><a href="#">Beverages</a></li>
//       <li><a href="#">Beauty & Hygine</a></li>
//       <li><a href="#">Body Care</a></li>
//     </ul>
//   </div>
//   <div class=" products-listing">
// <div class="product">
//   <h3>Fresho Kiwi - Green, 3 pcs</h3>
//   <div class="country"><img src="assets/images/countries/chile.jpg"></div>
//   <img src="assets/images/products/01.jpg"></img>
//   <div class="ribbon">
//     <span>Regular</span>
//   </div>
//   <div class="product-info">
//     3 pc (270g-300g)
//   </div>
//   <div class="description">
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
//     </p>
//   </div>
//   <div class="purchase">
//     <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
//     <button>Buy Now</button>
//   </div>
// </div>
//     <div class="product">
//       <h3>Fresho Kiwi - Green, 3 pcs</h3>
//       <div class="country"><img src="assets/images/countries/chile.jpg"></div>
//       <img src="assets/images/products/01.jpg"></img>
//       <div class="ribbon">
//         <span>Regular</span>
//       </div>
//       <div class="product-info">
//         3 pc (270g-300g)
//       </div>
//       <div class="description">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
//         </p>
//       </div>
//       <div class="purchase">
//         <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
//         <button>Buy Now</button>
//       </div>
//     </div>
//   </div>
// </section>
