import '../styles/products.scss';
import "../styles/cart.scss";

window.addEventListener("popstate", (e) => {
  loadProducts()
})

const loadProducts = async () => {
  try {
    const productsUrl = "http://localhost:3200/products"
    const res = await Promise.all([
      fetch("http://localhost:3200/categories"),
      fetch(productsUrl),
    ]);
    const json = await Promise.all([
      res[0].json(),
      res[1].json(),
    ]);


    const productsSection = document.getElementById("products");
    const aside = document.getElementsByTagName("aside")
    const asideSection = document.getElementById("aside_container");

    for (let i = 0; i < json[0].length; i++) {
      const element = json[0][i];
      const li = document.createElement("li");
      li.innerHTML = `<a href = ${element.key}> ${element.name} </a>`
      asideSection.appendChild(li);
    }

    // display products
    for (let i = 0; i < json[1].length; i++) {

      const element = json[1][i];
      const itemsDiv = document.createElement("div");
      itemsDiv.className = "products__item";

      itemsDiv.innerHTML = `
                <h2>${element.name}</h2>
                <img src="${element.imageURL}" alt="${element.name}" />
                <p>${element.description}</p>
                <span>MRP ${new Intl.NumberFormat("en-IN", {
        currency: "INR",
        style: "currency"
      }).format(element.price)}</span>
                <button class="btn">Buy Now</button>
                <button class="btn-price">Buy Now @ ${new Intl.NumberFormat("en-IN", {
        currency: "INR",
        style: "currency"
      }).format(element.price)}</button>
            `;

      productsSection.appendChild(itemsDiv);
    }

  } catch (error) {

  }
}

// For the modal
let modal = document.getElementById("cart_modal");
let cartData = [];
let countOfItem = 1

const getCartData = async () => {
  const url = "http://localhost:3200/cart"
  const jsonData = await fetch(url);
  const resData = await jsonData.json();
  const itemCount = document.getElementById("itemCount")
  itemCount.innerHTML = resData.length + " Item";
  cartData = resData;
}

var btn = document.getElementById("openModal");
var span = document.getElementById("close");

btn.onclick = function () {
  let totalCartAmount=0
  modal.style.display = "block";
  const cartItem = document.getElementById("cart_item")
  const cartTitle = document.getElementById("cart-title")
  cartTitle.innerHTML = `My Cart (${cartData.length} item)`
  const totalCartAmountElement = document.getElementById("total_cart_amount")

  if (cartData.length > 0) {
    for (let i = 0; i <= cartData.length; i++) {
      const element = cartData[i]
      totalCartAmount = totalCartAmount + element.price;
      const div = document.createElement("div")
      div.classList = "cart-list"
      div.innerHTML = `
      <div class="cart-list-item">
            <img src=${element.imageURL} alt="${element.name}"/>
            <div class="dlsITem">
              <text>${element.name}</text> </br>
              <button>-</button> ${countOfItem}
              <button>+</button><text> &times; Rs.${element.price}</text>
            </div>
            <div>
                Rs.${element.price * countOfItem}
            </div>
      </div>
      `
      cartItem.appendChild(div);
      totalCartAmountElement.innerHTML = `Rs. ${totalCartAmount}  > `
    }
  } else {
    const div = document.createElement("div")
    cartItem.classList = "no-item-list"
    div.innerHTML = `
      <div>
          <h2>No items in your cart</h2>
         <span>your favorite items are just a click away</span>
      </div>
      `
    cartItem.appendChild(div)
  }
  element.style.display = "block"
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

getCartData();
loadProducts();