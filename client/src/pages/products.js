//variable declarations
let productItems = "";
let allProducts;
let clickedProduct = [];
let cartItems = "";
let cartValue = 0;

//returns all the products
async function productsData() {
  try {
    let response = await fetch("http://localhost:5000/products");
    allProducts = await response.json(); // ok
    displayProductsItems(allProducts);
  } catch (error) {
    console.log(error);
  }
}

function displayProductsItems(products) {
  for (let i = 0; i < products.length; i++) {
    fillProductsElements(products[i]);
  }
}

function fillProductsElements(products) {
  productItems += `<div class="cards">
    
    <strong>${products.name}</strong>
    <div>
    <div>
    <img width="200" height="200"  src="../../..${products.imageURL}" alt="${products.name}"/>
    </div>
    <div class="description-button">
    <p id="product_description">${products.description}</p>
    <p class="buy_button">
        <span>MRP ${products.price}</span>
        <span><button onclick="addTocart('${products.id}')">Buy Now</button></span>
    </p>
    </div>
    </div>
</div>`;
  document.querySelector(".all_cards").innerHTML = productItems;
}

window.addEventListener("DOMContentLoaded", productsData());

function filterData(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

let ul = document.getElementById("filterData");
ul.onclick = function (event) {
  let target = filterData(event);

  let filteredProducts = allProducts.filter((product) => {
    return product.category === target.id;
  });
  productItems = "";
  displayProductsItems(filteredProducts);
};

//opens the cart
function openCart() {
  document.querySelector(".cart").style.display = "block";
}

//Buy  now  functionality
function addTocart(id) {
  let addedProducts = allProducts.filter((product) => {
    return product.id === id;
  });
  clickedProduct.push(addedProducts);

  let addedItem = "";
  let itemCount = 0;
  clickedProduct.forEach((ele) => {
    if (ele[0].id === id) {
      itemCount += 1;
    }
  });
  cartValue += addedProducts[0].price;
  if (itemCount < 2) {
    addedItem = `<div class="added_items" id="cart_product${addedProducts[0].id}">
        <img height="50" width="50" src="../../..${addedProducts[0].imageURL}"/>
        <div class="item_container">
            <div>
            <strong>${addedProducts[0].name}</strong>
            </div>
            <div><button class="cart_button" onclick="deleteItem('${addedProducts[0].id}')">-</button><input id="${addedProducts[0].id}" type= "text" value=${itemCount} /><button onclick="addItem('${id}')" class="cart_button">+</button>
            </div>
        </div>
        <div><p>${addedProducts[0].price}</p></div>
        </div>`;

    cartItems += addedItem;
    document
      .querySelector(".cart_items")
      .insertAdjacentHTML("afterend", addedItem);
  } else {
    document.getElementById(id).value = itemCount;
  }
  document
    .getElementsByTagName("header-component")[0]
    .setAttribute("cart_count", clickedProduct.length);
  document
    .getElementsByTagName("cart-component")[0]
    .setAttribute("cart-value", cartValue);
}

//add more item to cart of same product
function addItem(id) {
  let addedProducts = allProducts.filter((product) => {
    return product.id === id;
  });
  clickedProduct.push(addedProducts);
  let itemCount = 0;
  clickedProduct.forEach((ele) => {
    if (ele[0].id === id) {
      itemCount += 1;
    }
  });
  cartValue += addedProducts[0].price;

  document.getElementById(id).value = itemCount;
  document
    .getElementsByTagName("header-component")[0]
    .setAttribute("cart_count", clickedProduct.length);
  document
    .getElementsByTagName("cart-component")[0]
    .setAttribute("cart-value", cartValue);
}

//delete item from cart
function deleteItem(id) {
  let addedProducts = allProducts.filter((product) => {
    return product.id === id;
  });
  let indexToRemove = clickedProduct.findIndex((ele) => ele[0].id === id);
  clickedProduct.splice(indexToRemove, 1);
  let itemCount = 0;
  clickedProduct.forEach((ele) => {
    if (ele[0].id === id) {
      itemCount += 1;
    }
  });
  if (itemCount) {
    document.getElementById(id).value = itemCount;
    cartValue -= addedProducts[0].price;
  } else {
    cartValue -= addedProducts[0].price;
    document.getElementById("cart_product" + addedProducts[0].id).remove();
  }

  document
    .getElementsByTagName("header-component")[0]
    .setAttribute("cart_count", clickedProduct.length);
  document
    .getElementsByTagName("cart-component")[0]
    .setAttribute("cart-value", cartValue);
}

//close the cart
function closeCart() {
  document.querySelector(".cart").style.display = "none";
}
