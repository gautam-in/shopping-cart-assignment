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
  renderCart
} from '../views/cartView';

import {
  renderCartCount
} from '../views/headerCartCountView';


// API section
import {
  POSTAddToCart
} from '../services/appServices'

export const renderProducts = (filtered) => {
  let markup = `
  <section class="products">
    <div class="products-menu">
      <ul>
        %%products-menu%%
      </ul>
    </div>
    <div class=" products-listing">
      %%products%%
    </div>
  </section>
    `;

  // Products Categories
  if (servicesData.categories) {
    let productsCategories = "";
    //servicesData.categories.length
    for (let i = 0; i < servicesData.categories.length; i++) {
      productsCategories = productsCategories + `<li><a class="filter-categories" id="` + servicesData.categories[i].id + `" href="#">` + servicesData.categories[i].name + `</a></li>`;
    }

    markup = markup.replace('%%products-menu%%', productsCategories);
    elements.landingPage.mainContent.innerHTML = markup;
    if (!elements.registerdEvents.productsPage.filterCategoriesEventStatus) {
      filterCategories();
    }

  } else {

    elements.landingPage.mainContent.innerHTML = "Sorry Unable to Fetch Data";

  }
  // console.log(servicesData);
  if (!filtered) {
    // console.log(" NOT filtered");

    // Products Section
    if (servicesData.products) {
      let products = "";
      // servicesData.products.length
      for (let i = 0; i < servicesData.products.length; i++) {
        // let splittedString = servicesData.products[i].name.split(',');
        products = products + `<div class="product">
            <h3>` + servicesData.products[i].name + `</h3>
            <img src="` + servicesData.products[i].imageURL + `"></img>
          <div class="description">
            <p>` + servicesData.products[i].description + `</p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> ` + servicesData.products[i].price + `</span>
            <button class="button-Buy-Now" id="` + servicesData.products[i].id + `">Buy Now</button>
          </div>
          </div>`;
      }

      markup = markup.replace('%%products%%', products);
      elements.landingPage.mainContent.innerHTML = markup;
      if (!elements.registerdEvents.productsPage.handleButtonsEventStatus) {
        handleButtons();
      }
    } else {

      elements.landingPage.mainContent.innerHTML = "Sorry Unable to Fetch Data";

    }

  } else {
    // Filfiltered Products Section
    document.querySelector('.products-listing').removeEventListener('click', buttonEventHandler);
    elements.registerdEvents.productsPage.handleButtonsEventStatus = false;
    if (servicesData.filteredProducts) {
      let filteredProducts = "";
      // servicesData.products.length
      for (let i = 0; i < servicesData.filteredProducts.length; i++) {
        // let splittedString = servicesData.products[i].name.split(',');
        filteredProducts = filteredProducts + `<div class="product">
            <h3>` + servicesData.filteredProducts[i].name + `</h3>
            <img src="` + servicesData.filteredProducts[i].imageURL + `"></img>
          <div class="description">
            <p>` + servicesData.filteredProducts[i].description + `</p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> ` + servicesData.filteredProducts[i].price + `</span>
            <button class="button-Buy-Now" id="` + servicesData.filteredProducts[i].id + `">Buy Now</button>
          </div>
          </div>`;
      }

      markup = markup.replace('%%products%%', filteredProducts);
      elements.landingPage.mainContent.innerHTML = markup;

      if (!elements.registerdEvents.productsPage.handleButtonsEventStatus) {
        handleButtons();
      }
    } else {

      elements.landingPage.mainContent.innerHTML = "Sorry Unable to Fetch Data";

    }

  }
};

const handleButtons = () => {
  elements.registerdEvents.productsPage.handleButtonsEventStatus = true;
  document.querySelector('.products-listing').addEventListener('click', buttonEventHandler);
};
const filterCategories = () => {
  // console.log(event.target.classList);
  elements.registerdEvents.productsPage.filterCategoriesEventStatus = true;
  document.addEventListener('click', filterCategoriesEventHandler);
};

export const updateProductDetails = (insertionType, productId) => {
  let productCounter;
  for (productCounter = 0; productCounter < servicesData.products.length; productCounter++) {
    if (servicesData.products[productCounter].id == productId) {
      break;
    }
  }
  switch (insertionType) {
    case "new":
      servicesData.cartStatus.productDetails['id'] = productId;
      servicesData.cartStatus.productDetails['count'] = 1;
      servicesData.cartStatus.productDetails['name'] = servicesData.products[productCounter].name;
      servicesData.cartStatus.productDetails['imageURL'] = servicesData.products[productCounter].imageURL;
      servicesData.cartStatus.productDetails['price'] = servicesData.products[productCounter].price;
      servicesData.cartStatus.productDetails['category'] = servicesData.products[productCounter].category;
      // console.log(servicesData.cartStatus.productDetails);

      break;
    case "updateAdd":
      servicesData.cartStatus.productDetails['count'] = servicesData.cartStatus.productDetails['count'] + 1;
      // console.log(servicesData.cartStatus.productDetails);
      break;
    case "updateRemove":
      servicesData.cartStatus.productDetails['count'] = servicesData.cartStatus.productDetails['count'] - 1;
      if (servicesData.cartStatus.productDetails.count == 0) {
        servicesData.cartStatus.productDetails = {
          id: null
        };
        servicesData.cartStatus.productDetails['count'] = 0;
        elements.registerdEvents.CartPage.addItemEventStatus = false;
        elements.registerdEvents.CartPage.removeItemEventStatus = false;
      }
      // console.log(servicesData.cartStatus.productDetails['count']);
      break;
    case "empty":
      servicesData.cartStatus.productDetails['id'] = productId;
      servicesData.cartStatus.productDetails['count'] = 1;
      servicesData.cartStatus.productDetails['name'] = servicesData.products[productCounter].name;
      servicesData.cartStatus.productDetails['imageURL'] = servicesData.products[productCounter].imageURL;
      servicesData.cartStatus.productDetails['price'] = servicesData.products[productCounter].price;
      servicesData.cartStatus.productDetails['category'] = servicesData.products[productCounter].category;
      // console.log(servicesData.cartStatus.productDetails);
      break;
  }
  servicesData.cartStatus.cartDetails.totalItemCount = servicesData.cartStatus.productDetails['count'];
  // console.log(servicesData.cartStatus.cartDetails.totalItemCount);

};

const buttonEventHandler = (event) => {
  if (event.target.classList.contains('button-Buy-Now')) {
    XHRLoader(true);
    let productId = event.target.id;
    let productDetails = {};
    POSTAddToCart(event.target.id).subscribe(
      (data) => {
        if (data.response.statusCode === 200 && data.body.response == 'Success') {

          // When Cart is NOT empty
          if (servicesData.cartStatus.productDetails['id'] !== null) {

            if (servicesData.cartStatus.productDetails['id'] == productId) {
              updateProductDetails("updateAdd", productId);
              renderCartCount();
            } else {
              updateProductDetails("new", productId);
              renderCartCount();
            }
          } else { //When Cart is Empty
            updateProductDetails("empty", productId);
            renderCartCount();
          }

        }
        // console.log(servicesData.cartStatus.cartDetails.onScreen);
        if (servicesData.cartStatus.cartDetails.onScreen) {
          elements.registerdEvents.CartPage.addItemEventStatus = false;
          elements.registerdEvents.CartPage.removeItemEventStatus = false;
          renderCart(true);
          elements.cartView.closeButtonIcon.addEventListener('click', e => {
            renderCart(false);
          });

        }

        XHRLoader(false);
      },
      (err) => {
        console.error(err);
        XHRLoader(false);
      }
    );

  }
}


const filterCategoriesEventHandler = (event) => {
  if (event.target.classList.contains('filter-categories')) {
    XHRLoader(true);
    let categoryId = event.target.id;

    if (servicesData.filteredProducts == null) {
      servicesData.filteredProducts = [];
      //servicesData.categories.length
      for (let i = 0; i < servicesData.products.length; i++) {
        if (categoryId == servicesData.products[i].category) {
          servicesData.filteredProducts.push(servicesData.products[i]);
        }
      }
      renderProducts(true);
      XHRLoader(false);

      return
    } else if (categoryId != servicesData.filteredProducts[0].category) {
      servicesData.filteredProducts = [];
      //servicesData.categories.length
      for (let i = 0; i < servicesData.products.length; i++) {
        if (categoryId == servicesData.products[i].category) {
          servicesData.filteredProducts.push(servicesData.products[i]);
        }
      }
      renderProducts(true);
      XHRLoader(false);

    } else {
      elements.registerdEvents.productsPage.handleButtonsEventStatus = false;
      renderProducts(false);
      XHRLoader(false);
    }


  }
}








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
