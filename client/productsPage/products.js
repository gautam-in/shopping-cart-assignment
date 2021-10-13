function onLoadCartNumbers() {
  let productCartCounter = localStorage.getItem("cartCounter");
  if (productCartCounter) 
    document.querySelector(".cart-count").textContent = productCartCounter;
}
onLoadCartNumbers();

let prodList = document.getElementById("prod");

function getFromAPI(url, callback, filterCat = false) {
  var obj;
  fetch(url)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => callback(obj, filterCat));
}

getFromAPI("http://localhost:5000/products", getData);

function getData(arrOfObjs, filterCat = false) {
  document.getElementById("prod").innerHTML = "";
  arrOfObjs.forEach((x, ind) => {
    let str;

    if (filterCat) {
      if (x.category === filterCat) {
        str = ` <div class="product-card">
            <div class="product-info">
              <h5>${x.name}</h5>
              <div class="product-image">
              <img src=${x.imageURL} alt=${x.name}>
              </div>
              <p>${x.description}</p>
             
              <button id="cart-button" onclick="addToCart('${x.name}','${
          x.price
        }',${0},'${x.sku}')">Buy Now @ ${x.price}</button>
            </div>
          </div>`;
        prodList.innerHTML += str;
      }
    } else {
      str = ` <div class="product-card">
        <div class="product-info">
          <h5>${x.name}</h5>
          <div class="product-img-div">
          <div class="product-image">
          <img src=${x.imageURL} alt=${x.name}>
          </div>
          <p>${x.description}</p>
          </div>
          <button id="cart-button" onclick="addToCart('${x.name}','${
        x.price
      }',${0},'${x.sku}', '${x.imageURL}')">Buy Now @ ${x.price}</button>
        </div>
      </div>`;
      prodList.innerHTML += str;
    }
  });
}

const addToCart = (name, price, inCart, tag, image) => {
  let cartObj = {
    tag,
    name,
    price,
    inCart,
    image
  };
  let productCartCounter = localStorage.getItem("cartCounter");
  productCartCounter = parseInt(productCartCounter);
  if (productCartCounter) {
    localStorage.setItem("cartCounter", productCartCounter + 1);
    document.querySelector(".cart-count").textContent = productCartCounter + 1;
  } else {
    localStorage.setItem("cartCounter", 1);
    document.querySelector(".cart-count").textContent = 1;
  }
  setItems(cartObj);
  totalCost(cartObj);
};

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + parseInt(product.price));
  } else {
    localStorage.setItem("totalCost", parseInt(product.price));
  }
}

function filterData(category) {
  getFromAPI("http://localhost:5000/products", getData, category);
}
