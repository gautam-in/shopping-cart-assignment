function onLoadCartNumbers() {
  let productCartCounter = localStorage.getItem("cartCounter");
  console.log(productCartCounter);
  if (productCartCounter) {
    document.querySelector(".cart-count").textContent = productCartCounter;
  }
}
onLoadCartNumbers();

localStorage.getItem("cartCounter")
  ? (document.querySelector(".cart-count").textContent =
      localStorage.getItem("cartCounter"))
  : (document.querySelector(".cart-count").textContent = 0);

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);
  console.log("cartItems");
  let productContainer = document.querySelector(".cart-products");
  let shoppingCartDiv = document.querySelector(".shopping-cart");
  if (cartItems && productContainer && Object.keys(cartItems).length !== 0) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class="product">
            <div class="product-image">
              <img src="${item.image}">
            </div>
            <div class="product-details">
              <div class="product-title">${item.name}</div>
            </div>
            <div class="product-price"> ${parseInt(item.price)}</div>
            <div class="product-quantity">
            <i onclick="removeFromCart('${item.name}','${item.price}',${0},'${
        item.tag
      }')" style="margin-right: 10px;" class="fa fa-minus-circle"></i> ${
        item.inCart
      } <i onclick="addToCart('${item.name}','${item.price}',${0},'${
        item.tag
      }')" style="margin-left: 10px;" class="fa fa-plus-circle"></i>
            </div>
            <div class="product-line-price"> ${
              item.inCart * parseInt(item.price)
            }</div>
          </div>`;
    });
    productContainer.innerHTML += `
      <button class="checkout" onclick="clearStorage()" >Proceed to Checkout <span>Rs ${cartCost}</span></button>`;
  } else {
    shoppingCartDiv.innerHTML = `<h1 class="noCart-h1">No items in your cart</h1>
         <p class="noCart-p">Your favorite items are just a click away</p>
         <button class="checkout checkout1"><a href="home.html">Start Shopping<a/></button>`;
  }
}

const clearStorage = () => {
  localStorage.clear();
  displayCart();
  onLoadCartNumbers();
};

displayCart();

const addToCart = (name, price, inCart, tag, image) => {
  let cartObj = {
    tag,
    name,
    price,
    inCart,
    image,
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
  displayCart();
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

const removeFromCart = (name, price, inCart, tag, image) => {
  let cartObj = {
    tag,
    name,
    price,
    inCart,
    image,
  };
  let productCartCounter = localStorage.getItem("cartCounter");
  productCartCounter = parseInt(productCartCounter);
  if (productCartCounter) {
    localStorage.setItem("cartCounter", productCartCounter - 1);
    document.querySelector(".cart-count").textContent = productCartCounter - 1;
  } else {
    localStorage.setItem("cartCounter", 0);
    document.querySelector(".cart-count").textContent = 0;
  }
  removeItems(cartObj);
  totalCost(cartObj, true);
  displayCart();
};

function removeItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart -= 1;
    if (cartItems[product.tag].inCart === 0) {
      delete cartItems[product.tag];
    }
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, removedItem = false) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null && !removedItem) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + parseInt(product.price));
  } else if (cartCost != null && removedItem) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - parseInt(product.price));
  } else {
    localStorage.setItem("totalCost", parseInt(product.price));
  }
}
