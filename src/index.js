/***********index.html******** */
var bannerdata = document.getElementById("bannerdata");
$(document).ready(function () {
  $.get("http://localhost:8081/categories", function (data, status) {
    // console.log("Data: " + data + "\nStatus: " + status);
    let bannerdataArray = JSON.parse(data);
    // console.log(bannerdataArray);
    function sortByProperty(property) {
      return function (a, b) {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;
        return 0;
      };
    }
    const sortedbannerData = bannerdataArray.sort(sortByProperty("order"));
    // console.log(sortedbannerData);
    var x = true;
    for (i = 0; i <= sortedbannerData.length; i++) {
      if (sortedbannerData[i].enabled) {
        const newElement = document.createElement("div");
        newElement.className = "container py-5";

        if (x) {
          newElement.innerHTML = `
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4 col-md-4 col-sm-4 text-center">
          <img
            class="d-block img-fluid w-100"
            src=${sortedbannerData[i].imageUrl}
            alt=${sortedbannerData[i].name}
          />
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="banner_detail text-center">
            <h3>${sortedbannerData[i].name}</h3>
            <p>
              ${sortedbannerData[i].description}
            </p>
            <a href="#" role="button" class="explore_btn">Explore ${sortedbannerData[i].key}</a>
          </div>
        </div>
      </div>`;
          x = false;
        } else {
          newElement.innerHTML = `
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="banner_detail text-center">
            <h3>${sortedbannerData[i].name}</h3>
            <p>
              ${sortedbannerData[i].description}
            </p>
            <a href="#" role="button" class="explore_btn">Explore ${sortedbannerData[i].key}</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 text-center">
          <img
            class="d-block img-fluid w-100"
            src=${sortedbannerData[i].imageUrl}
            alt=${sortedbannerData[i].name}
          />
        </div>

      </div>`;
          x = true;
        }
        bannerdata.append(newElement);
      }
    }
  });
});

/*******product.html***** */
var product_grid = document.getElementById("product_grid");
var cart_sidebar = document.getElementById("cart_sidebar");
let idArray = [];
var categoryId = "5b6899953d1a866534f516e2";
let productsdataArray;
// let idArray = [];
let alertMessage;
function setCategoryFruits() {
  product_grid.innerHTML = ``;
  categoryId = "5b6899953d1a866534f516e2";
  reloadCategory(categoryId);
}
function setCategoryBakery() {
  product_grid.innerHTML = ``;
  categoryId = "5b6899123d1a866534f516de";
  reloadCategory(categoryId);
}
function setCategoryBeverages() {
  product_grid.innerHTML = ``;
  categoryId = "5b675e5e5936635728f9fc30";
  reloadCategory(categoryId);
}
function setCategoryBeauty() {
  product_grid.innerHTML = ``;
  categoryId = "5b68994e3d1a866534f516df";
  reloadCategory(categoryId);
}
function setCategoryBabycare() {
  product_grid.innerHTML = ``;
  categoryId = "5b6899683d1a866534f516e0";
  reloadCategory(categoryId);
}
function addtoCart() {
  idArray = [...idArray, event.srcElement.id];
  console.log(idArray);
  $.get("http://localhost:8081/addToCart", function (data, status) {
    alertMessage = JSON.parse(data);
    alert(alertMessage.responseMessage);
  });
  cart_sidebar.innerHTML = ``;
  // console.log(cart_sidebar);
  for (let i = 0; i <= productsdataArray.length; i++) {
    for (let j = 0; j <= idArray.length; j++) {
      if (productsdataArray[i].id === idArray[j]) {
        let newElement4 = document.createElement("div");
        newElement4.className = "row h-100";
        newElement4.innerHTML = `
                        <div class="col-12 h-100">
                          <div class="card p-4">
                            <div class="row">
                              <div class="col-md-5 col-11 shadow cart_product_img">
                                <img
                                  class="d-block img-fluid" src=${productsdataArray[i].imageURL}
                                />
                              </div>
                              <div class="col-md-7 col-sm-11">
                                <p class="mb-2 product_name">${productsdataArray[i].name}</p>
                                <ul class="pagination set_quantity">
                                  <li class="page-item">
                                    <button  class="page-link" onclick="decreaseNumber()">
                                      <i class="fa fa-minus" aria-hidden="true"></i>
                                    </button>
                                  </li>
                                  <li class="page-item">
                                    <input
                                      type="text"
                                      class="page-link item_quantity"
                                      value="0"
                                      id="textbox"
                                    />
                                  </li>
                                  <li class="page-item">
                                    <button class="page-link" onclick="increaseNumber()">
                                      <i class="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                  </li>
                                </ul>
                                <div class="d-flex align-items-center justify-content-around delete_wish_item">
                                  <p>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                  </p>
                                  <h3 class="mb-0" id="total_val">MRP Rs.${productsdataArray[i].price}</h3>
                                </div>
                              </div>
                            </div>
                          </div>

                        <div>`;
        cart_sidebar.append(newElement4);
      }
    }
  }
}
// function decreaseNumber() {
//   var itemQuantity = document.getElementById("textbox");
//   if (itemQuantity.value <= 0) {
//     itemQuantity.value = 0;
//   } else {
//     itemQuantity.value = parseInt(itemQuantity.value) - 1;
//   }
// }
// function increaseNumber() {
//   var itemQuantity = document.getElementById("textbox");
//   if (itemQuantity.value >= 5) {
//     itemQuantity.value = 5;
//     alert("Max 5 units allowed");
//   } else {
//     itemQuantity.value = parseInt(itemQuantity.value) + 1;
//   }
// }
function reloadCategory(categoryId) {
  for (i = 0; i <= productsdataArray.length; i++) {
    // console.log(categoryId);
    if (productsdataArray[i].category !== categoryId) {
      continue;
    }
    let newElement2 = document.createElement("div");
    newElement2.className = "col-lg-3 col-md-4 col-sm-6 p-1";
    newElement2.innerHTML = `
                        <div class="card product_details h-100">
                          <div class="card-header">
                            <h4 class="card-title">${productsdataArray[i].name}</h4>
                          </div>
                          <div class="card-body">
                            <img
                              class="card-img d-block img-fluid"
                              src=${productsdataArray[i].imageURL}
                              alt="Card image"
                            />
                            <p class="card-text">
                              ${productsdataArray[i].description}
                            </p>
                          </div>
                          <div class="card-footer">
                            <p>MRP Rs.${productsdataArray[i].price}</p>
                            <button id="${productsdataArray[i].id}" class="buy_now_btn" onClick="addtoCart()">Buy Now</button>
                          </div>
                        </div>`;
    product_grid.append(newElement2);
  }
}
$.get("http://localhost:8081/products", function (data, status) {
  // console.log("Data: " + data + "\nStatus: " + status);
  productsdataArray = JSON.parse(data);
  // console.log(productsdataArray);

  $(document).ready(function () {
    for (i = 0; i <= productsdataArray.length; i++) {
      let newElement3 = document.createElement("div");
      newElement3.className = "col-lg-3 col-md-4 col-sm-6 p-1";
      newElement3.innerHTML = `
                        <div class="card product_details h-100">
                          <div class="card-header">
                            <h4 class="card-title">${productsdataArray[i].name}</h4>
                          </div>
                          <div class="card-body">
                            <img
                              class="card-img d-block img-fluid"
                              src=${productsdataArray[i].imageURL}
                              alt="Card image"
                            />
                            <p class="card-text">
                              ${productsdataArray[i].description}
                            </p>
                          </div>
                          <div class="card-footer">
                            <p>MRP Rs.${productsdataArray[i].price}</p>
                            <button id="${productsdataArray[i].id}" class="buy_now_btn" onClick="addtoCart()">Buy Now</button>
                          </div>
                        </div>`;
      product_grid.append(newElement3);
    }
  });
});
function openCart() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeCart() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
