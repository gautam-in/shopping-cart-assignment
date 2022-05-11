const API_URL = "https://sabka-bazar-sapient.herokuapp.com";

let allProducts = [];
let productsInCart = [];
let allCategories = [];

let totalPriceCheckout = $(".totol-price-proceed-to-checkout");
let showDropdownBtn = $("#show-dropdown"); // function $(){...} is a function for selecting dom nodes
let hideDropdownBtn = $("#hide-dropdown");
let dropdownItems = $("#dropdown-items");
let cartBtn = $("#cart-btn");
let cartBody = $("#cart-body");

let backDrop = $("#backdrop");
let alertBox = $("#alert-box");

let items = Array.from($(".product-item"));
let categorySection = $("#main-category");



//***************************************** LAODING PRODUCT DATA ***************************************** */
async function fetchProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    if (data.success) {
      // setting in localStorage
      // localStorage.setItem("products", JSON.stringify(data.products));

      allProducts = data.products;
      printOnScreen(data.products);
    }
  } catch (err) {
    console.log(err);
  }
}



//***************************************** LAODING CATEGORY DATA ***************************************** */
async function fetchCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);
    const data = await res.json();
    if (data.success) {
      allCategories = data.categories;
      setCategories();
    }
  } catch (err) {
    console.log(err);
  }
}



//**************************************  PRINTING PRODUCTS ON DOM **************************************** */
let loader = false;
function printOnScreen(products) {
  if (!loader) {
    $(".load").classList.replace("load", "d-none");
    loader = true;
  }
  if (products.length == 0) {
    categorySection.innerHTML = `<h2 class="text-secondary">No Products Available in this Category ! </h2>`;
  }
  products.forEach((product) => {
    // Product Card
    let productCard = document.createElement("div");
    productCard.setAttribute("class", "product-card");

    // Title
    let productTitle = document.createElement("p");
    productTitle.setAttribute("class", "text-bold");
    productTitle.innerText = product.name;
    productCard.appendChild(productTitle);

    // Image
    let flexBoxInMobileDevice = document.createElement("div");
    flexBoxInMobileDevice.setAttribute("class", "flex-on-mobile");

    let productImage = document.createElement("img");
    productImage.src = product.imageURL;
    flexBoxInMobileDevice.appendChild(productImage);

    // Description
    let productDescription = document.createElement("div");
    productDescription.setAttribute("class", "product-description");
    let productDescriptionPara = document.createElement("p");
    productDescriptionPara.innerText = product.description;
    productDescription.appendChild(productDescriptionPara);
    productCard.appendChild(productDescription);
    flexBoxInMobileDevice.appendChild(productDescription);

    productCard.appendChild(flexBoxInMobileDevice);

    // Price and Button
    let productButtonBox = document.createElement("div");
    productButtonBox.setAttribute("class", "product-button-box");

    let productButton = document.createElement("button");
    productButton.onclick = () => addToCart(product);

    if (window.innerWidth <= 900) {
      productButton.innerText = `Buy Now @ Rs.${product.price}`;
    } else {
      let productPrice = document.createElement("p");
      productPrice.innerText = `MRP Rs.${product.price}`;
      productButton.innerText = "Buy Now";
      productButtonBox.appendChild(productPrice);
    }

    productButtonBox.appendChild(productButton);
    productCard.appendChild(productButtonBox);

    categorySection.appendChild(productCard);
  });
  // Checking device width for mediaquery
  checkWidth();
}



//***************************************** PRINTING CART iTEMS ON DOM  **********************************************//
function showCartItems(product) {
  // Showing No of cart Items
  $("#no-of-items-in-cart2").innerText = productsInCart.length;
  $("#no-of-items-in-cart").innerText = productsInCart.length;

  let itemBox = document.createElement("div");
  itemBox.setAttribute("class", "item-box");
  itemBox.setAttribute("id", product.id);

  // Cart Image
  let itemImage = document.createElement("img");
  itemImage.src = product.imageURL;
  itemBox.appendChild(itemImage);

  // Cart titlebox
  let titleBox = document.createElement("div");
  titleBox.setAttribute("class", "title-box");

  let itemTitle = document.createElement("p");
  itemTitle.setAttribute("class", "text-bold cart-item-title");
  itemTitle.innerText = product.name;
  titleBox.appendChild(itemTitle);

  // Cart pricebox
  let priceBox = document.createElement("div");
  priceBox.setAttribute("class", "price-box");
  let itemPrice = document.createElement("span");

  let count = 1;
  itemPrice.innerHTML = `<span class='s-btn dec' onclick='decrementCartItems(event)'>-</span> <span>${count}</span> <span class='s-btn inc' onclick="incrementCartItems(event)">+</span> X Rs.<span>${product.price}</span>`;
  priceBox.appendChild(itemPrice);

  // Cart Total Price
  let totalPrice = document.createElement("p");
  let total = document.createElement("span");
  total.setAttribute('class', 'all-product-price');
  total.innerText = `Rs.${product.price}`;
  totalPrice.appendChild(total);


  let trash = document.createElement('i');
  trash.setAttribute('class', 'fa-solid fa-trash');
  trash.onclick = () => removeItemFromCart(product.id);
  trash.setAttribute('title', 'Remove this item from Cart');

  totalPrice.appendChild(trash)
  priceBox.appendChild(totalPrice);
  titleBox.appendChild(priceBox);

  itemBox.appendChild(titleBox);

  cartBody.appendChild(itemBox);
}



//************************************ CHECK WIDTH OF DIVICE  **********************************************//
function checkWidth() {
  if (window.innerWidth <= 600) {
    // If media query matches
    dropdownItems.setAttribute("class", "d-none");
  } else {
    $("#dropdown").setAttribute("class", "d-none");
  }
}



//******************************************** CATEGORY SELECTION  ******************************************//
function setCategories() {
  Array.from($(".product-item")).forEach((item, index) => {
    item.innerText = allCategories[index].name;
    item.setAttribute("id", allCategories[index].id);
  });
}



//******************************************** SHOW ALL PRODUCTS CATEGORY  ******************************************//
function showAllProducts() {
  categorySection.innerHTML = "";

  printOnScreen(allProducts);
}



//******************************************** ADD TO CART  ************************************************//
function addToCart(product) {
  productsInCart = [...productsInCart, product];
  showCartItems(product);
  showAlert("Item Saved In Cart Successfully !");

  // Setting to localStorage
  localStorage.setItem('cart-items', JSON.stringify(productsInCart));
}



//******************************************** REMOVE ITEMS FROM CART  ******************************************//
function removeItemFromCart(id) {
  productsInCart = productsInCart.filter(item => item.id != id);
  document.getElementById(id).remove();

  // Removing from DOM
  $("#no-of-items-in-cart2").innerText = productsInCart.length;
  $("#no-of-items-in-cart").innerText = productsInCart.length;

  // Removing from LocalStorage
  if (localStorage.getItem('cart-items')) {
    localStorage.setItem('cart-items', JSON.stringify(productsInCart));
  }

  let subTotal = 0;
  Array.from($('.all-product-price')).forEach(item => {
    subTotal = subTotal + parseInt(item.innerText.substr(3));
  })

  // Final Price
  totalPriceCheckout.innerText = subTotal;
}



//************************************ INCREMENT PRODUCT IN CART *************************************//
function incrementCartItems(e) {
  let pNode = e.target.parentNode;
  let countNode = pNode.children[1];
  let price = parseInt(pNode.children[3].innerText)
  let count = parseInt(pNode.children[1].innerText);

  let result = pNode.parentNode.children[1];
  let initialPrice = parseInt(result.children[0].innerText.substr(3));

  // Updating DOM
  countNode.innerText = count + 1;
  result.children[0].innerText = `Rs. ${parseInt(countNode.innerText) * price}`;

  let subTotal = 0;
  Array.from($('.all-product-price')).forEach(item => {
    subTotal = subTotal + parseInt(item.innerText.substr(3));
  })

  // Final Price
  totalPriceCheckout.innerText = subTotal;
}



//************************************ DECREMENT PRODUCT IN CART *************************************//
function decrementCartItems(e) {
  let pNode = e.target.parentNode;
  // let count = pNode.children[1];
  if (parseInt(pNode.children[1].innerText) > 1) {
    let pNode = e.target.parentNode;
    let countNode = pNode.children[1];
    let price = parseInt(pNode.children[3].innerText)
    let count = parseInt(pNode.children[1].innerText);

    let result = pNode.parentNode.children[1];
    let initialPrice = parseInt(result.children[0].innerText.substr(3));

    // Updating DOM
    countNode.innerText = count - 1;
    result.children[0].innerText = `Rs. ${initialPrice - price}`;

    let subTotal = 0;
    Array.from($('.all-product-price')).forEach(item => {
      subTotal = subTotal + parseInt(item.innerText.substr(3));
    })

    // Final Price
    totalPriceCheckout.innerText = subTotal;
  }
}




// ********************************************************************************************//
//******************************** Event Listeners ********************************************//
// ********************************************************************************************//



//************************************ ADD CART ITEM QUANTITY *************************************//
Array.from($('.inc')).forEach(item => {
  item.addEventListener('click', (e) => {
    // e.target.innerHTML = `hi`
    alert('hi')
  })
})



//************************************ SHOWING USER SELECTED CATEGORY *************************************//
Array.from($(".product-item")).forEach((item, index) => {
  let selectedProduct;
  item.addEventListener("click", (e) => {
    selectedProduct = allProducts.filter(
      (product) => product.category == e.target.id
    );
    console.log(selectedProduct);

    categorySection.innerHTML = "";
    printOnScreen(selectedProduct);
  });
});


//******************************** TOGGLING DROPDOWN IN SMALL DEVICES *************************************//
let show = false;
showDropdownBtn.addEventListener("click", () => {
  if (show) {
    showDropdownOnSmallDevice();
    $("#show-dropdown").classList.replace("fa-angle-up", "fa-angle-down");
  } else {
    hideDropdownOnSmallDevice();
    $("#show-dropdown").classList.replace("fa-angle-down", "fa-angle-up");
  }
});

// Show Dropdown
function showDropdownOnSmallDevice() {
  dropdownItems.classList.replace("d-block", "d-none");
  show = !show;
}

// Hide Dropdown
function hideDropdownOnSmallDevice() {
  dropdownItems.classList.replace("d-none", "d-block");
  show = !show;
}



//****************************** CAPTURING USER CLICK ON CATEGORY ITEMS ************************************//
items.forEach((item) => {
  item.addEventListener("click", (event) => {
    let value = event.target.innerText;
    $("#category-name").innerText = value;
    hideDropdownOnSmallDevice();
  });
});




//******************************** SHOPING CART BUTTON LISTENER ********************************************//
cartBtn.addEventListener("click", () => {
  $("#cart").classList.replace("d-none", "d-block");
  showBackdrop();
  if (productsInCart.length === 0) {
    cartBody.innerHTML = `<div class="empty-cart"><h3>No items in your cart</h3><p class="text-sm">Your favourite items are just a click away</p></div>`;
  } else {
    if (cartBody.children.length != productsInCart.length) {
      $(".empty-cart").remove();
    }

    let price = 0;
    productsInCart.forEach((product) => {
      price += product.price;
    });

    // Total Price to Checkout
    totalPriceCheckout.innerText = price;
  }
});


// CLOSE CART BOX
function closeCart() {
  $("#cart").classList.replace("d-block", "d-none");
  hideBackdrop();
}



//**************************************** HELPER FUNCTIONS ************************************************/
// Selecting DOM Elements
function $(param) {
  const nodeList = document.querySelectorAll(param);
  if (nodeList.length == 1) {
    return nodeList[0];
  } else {
    return nodeList;
  }
}


// Show Backdrop
function showBackdrop() {
  backDrop.classList.replace("d-none", "d-block");
}


// Hide Backdrop
function hideBackdrop() {
  backDrop.classList.replace("d-block", "d-none");
}


// Showing Alert Box
function showAlert(msg) {
  alertBox.classList.replace("alert-box-hide", "alert-box-show");
  alertBox.innerText = msg;
  setTimeout(() => {
    hideAlert();
  }, 4000);
}


// Hiding Alert Box
function hideAlert() {
  alertBox.classList.replace("alert-box-show", "alert-box-hide");
  alertBox.innerText = "";
}


// Starter Function
function onDocumentReady() {
  fetchProducts();
  fetchCategories();

  // localStorage Setup
  if (localStorage.getItem('cart-items')) {
    let carts = JSON.parse((localStorage.getItem('cart-items')));
    productsInCart = carts;
    // showAlert("Cart Items Loaded Successfully !");
    carts.forEach(cart => {
      showCartItems(cart);
    })
  }
}
// On Load
onDocumentReady();
