// ---------- How the code is structured ----------
// --FETCH API
// --ACCESSING DOM ELEMENTS
// --RENDERING DATA ON SCREEN
// --Loading DATA on pageload

// -------------------- FETCH API --------------------
const PRODUCTS_DATA_URL = "http://localhost:5000/products";

localStorage.setItem("APIDATA", JSON.stringify([]));

let APIdataArr = JSON.parse(localStorage.getItem("APIDATA"));

let currentDataArr = []; // data from the API

// Function to update the array
const getUpdatedList = async () => {
  let response = await fetch(`${PRODUCTS_DATA_URL}`);
  let data = await response.json();
  APIdataArr = data;
  console.log(APIdataArr);
  updateCurrentData(APIdataArr, localStorage.getItem("SHOWCATEGORY"));
  updateDOM(currentDataArr);

  localStorage.setItem("APIDATA", JSON.stringify(APIdataArr));
};

// -------------------- ACCESSING DOM ELEMENTS --------------------
const buttonDOM = document.querySelectorAll(".category-button"); // buttons
const mobileButtonDOM = document.querySelectorAll(".custom-option"); // buttons

const mainContentDOM = document.querySelector(".products-section"); // main results div

// Converting the DOMNode to an array
const arrayDOM = Array.prototype.slice.call(buttonDOM);
const arrayMobileDOM = Array.prototype.slice.call(mobileButtonDOM);

// Toggle active class on buttons
const makeButtonActive = (buttonArr, buttonValue) => {
  buttonArr.map((button) => {
    button.value === buttonValue
      ? button.classList.add("active")
      : button.classList.remove("active");
  });
};

// Adding the function on button click
arrayDOM.map((button) => {
  button.addEventListener("click", function () {
    updateCurrentData(APIdataArr, button.value);
    updateDOM(currentDataArr);
    localStorage.setItem("SHOWCATEGORY", button.value);
    makeButtonActive(arrayDOM, localStorage.getItem("SHOWCATEGORY"));
  });
});
arrayMobileDOM.map((button) => {
  button.addEventListener("click", function () {
    updateCurrentData(APIdataArr, button.getAttribute("data-value"));
    updateDOM(currentDataArr);
    localStorage.setItem("SHOWCATEGORY", button.getAttribute("data-value"));
    makeButtonActive(arrayDOM, localStorage.getItem("SHOWCATEGORY"));
  });
});

// Updating DOM on button click
const updateCurrentData = (apiDataArr, category) => {
  currentDataArr = [];
  apiDataArr.filter((product) => {
    if (product.category === category) {
      currentDataArr.push(product);
    }
  });
};

// -------------------- RENDERING DATA ON SCREEN --------------------
const updateDOM = (contentArr) => {
  mainContentDOM.innerHTML = ``;
  contentArr.map((content) => {
    let node = document.createElement("div");
    node.classList.add("product-card");

    node.innerHTML = `<img src="${content.imageURL}" alt="${content.name}" />
    <div class="product-card-content">
        <h3 class="product-category">${content.name}</h3>
        
        <p class="product-description">${content.description}</p>
    </div>
    <div class="product-card-footer">
        <div class="product-reviews-wrapper">
            <div class="product-rating">
                <span>MRP Rs.${content.price}</span>
            </div>
            
        </div>
        <div class="button-wrapper">
            <button type="button" class="product-button" onclick="addToCart('${content.id}')">Add to cart</button>
        </div>
    </div>`;
    mainContentDOM.appendChild(node);
  });
};

const initialDOM = () => {
  getUpdatedList();
  updateCurrentData(APIdataArr, "5b6899953d1a866534f516e2"); // showing the list of products
  updateDOM(currentDataArr);
};

// Loading DATA on pageload
window.onload = initialDOM;

// ---------- Cart Functionality ----------
const cartNumber = document.querySelector(".cart-items"); // buttons

if (!JSON.parse(localStorage.getItem("cart"))) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Function to update cart items
// eslint-disable-next-line no-unused-vars
const addToCart = (product) => {
  notify("success", `&#9989; Added to cart successfully`);
  function notify(type, message) {
    (() => {
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2, 10);
      n.setAttribute("id", id);
      n.classList.add("notification", type);
      n.innerHTML = message;
      document.getElementById("notification-area").appendChild(n);
      setTimeout(() => {
        var notifications = document
          .getElementById("notification-area")
          .getElementsByClassName("notification");
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].getAttribute("id") == id) {
            notifications[i].remove();
            break;
          }
        }
      }, 5000);
    })();
  }

  //overlay.classList.toggle("active");
  let storageArray = JSON.parse(localStorage.getItem("cart"));

  storageArray.push(product);

  localStorage.setItem("cart", JSON.stringify(storageArray));

  console.log(localStorage.getItem("cart"));

  cartNumber.textContent = `${storageArray.length} items`;
};

makeButtonActive(arrayDOM, localStorage.getItem("SHOWCATEGORY"));

document
  .querySelector(".custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
