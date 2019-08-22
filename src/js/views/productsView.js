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


// API section
import {
  POSTAddToCart
} from '../services/appServices'

export const renderProducts = () => {
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
    for (var i = 0; i < servicesData.categories.length; i++) {
      productsCategories = productsCategories + `<li><a href="#category?id=` + servicesData.categories[i].id + `">` + servicesData.categories[i].name + `</a></li>`;
    }

    markup = markup.replace('%%products-menu%%', productsCategories);
    elements.landingPage.mainContent.innerHTML = markup;
  } else {

    elements.landingPage.mainContent.innerHTML = "kla";

  }

  // Products Section
  if (servicesData.products) {
    let products = "";
    // servicesData.products.length
    for (var i = 0; i < servicesData.products.length; i++) {
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
    handleButtons();
  } else {

    elements.landingPage.mainContent.innerHTML = "kla";

  }

};

const handleButtons = () => {
  document.addEventListener('click', e => {
    if (event.target.classList.contains('button-Buy-Now')) {
      XHRLoader(true);
      let productId = e.target.id;
      let productDetails = {};
      POSTAddToCart(e.target.id).subscribe(
        (data) => {
          if (data.response.statusCode === 200 && data.body.response == 'Success') {

            // When Cart is NOT empty
            if (servicesData.cartStatus.productDetails['id'] !== null) {

              if (servicesData.cartStatus.productDetails['id'] == productId) {
                updateProductDetails("update", productId);
              } else {
                updateProductDetails("new", productId);
              }
            } else { //When Cart is Empty
              updateProductDetails("empty", productId);
            }

          }
          // console.log(servicesData.cartStatus.cartDetails.onScreen);
          if (servicesData.cartStatus.cartDetails.onScreen) {

            renderCart(true);
            // console.log(servicesData.cartStatus.cartDetails.onScreen);

          }

          XHRLoader(false);
        },
        (err) => {
          console.error(err);
          XHRLoader(false);
        }
      );

    }
  })
};

const updateProductDetails = (insertionType, productId) => {
  let productCounter;
  for (productCounter = 0; productCounter < servicesData.products.length; productCounter++) {
    if (servicesData.products[productCounter].id == productId) {
      break;
    }
  }
  switch (insertionType) {
    case "new":
      servicesData.cartStatus.productDetails['id'] = productId
      servicesData.cartStatus.productDetails['count'] = 1
      servicesData.cartStatus.productDetails['name'] = servicesData.products[productCounter].name
      servicesData.cartStatus.productDetails['imageURL'] = servicesData.products[productCounter].imageURL
      servicesData.cartStatus.productDetails['price'] = servicesData.products[productCounter].price
      // console.log(servicesData.cartStatus.productDetails);

      break;
    case "update":
      servicesData.cartStatus.productDetails['count'] = servicesData.cartStatus.productDetails['count'] + 1;
      // console.log(servicesData.cartStatus.productDetails);
      break;
    case "empty":
      servicesData.cartStatus.productDetails['id'] = productId
      servicesData.cartStatus.productDetails['count'] = 1
      servicesData.cartStatus.productDetails['name'] = servicesData.products[productCounter].name
      servicesData.cartStatus.productDetails['imageURL'] = servicesData.products[productCounter].imageURL
      servicesData.cartStatus.productDetails['price'] = servicesData.products[productCounter].price
      // console.log(servicesData.cartStatus.productDetails);
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
