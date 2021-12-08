class MyNavbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    var modal = this.shadow.querySelector("#myModal");
    var cartBtn = this.shadow.querySelector("#cartButton");
    var span = this.shadow.querySelector(".cross");
    var container = document.querySelector(".container");
    var nav = this.shadowRoot.querySelector("#nav");
    var fade = document.createElement("div");
    fade.id = "fade";
    fade.style.width = "100vw";
    fade.style.height = "100vh";
    fade.style.position = "absolute";
    fade.style.display = "none";
    this.insertAfter(nav, fade);
    let fadeModal = this.shadowRoot.querySelector("#fade");

    this.cartProducts();
    document.addEventListener("NewData", (evt) => {
      let newProduct = evt.detail;
      this.addProduct(newProduct);
      if (this.shadowRoot.querySelector("#cartContainer")) {
        let shoppingcartContainer =
          this.shadowRoot.querySelector("#cartContainer");
        shoppingcartContainer.style.display = "none";
      }
      if (this.shadowRoot.querySelector(".lowestPrice")) {
        let lowestPrice = this.shadowRoot.querySelector(".lowestPrice");
        let checkout = this.shadowRoot.querySelector(".checkout");
        let modalColor = this.shadowRoot.querySelector(".shoppingCart");
        modalColor.background = "#eeeeee";
        lowestPrice.style.display = "block";
        checkout.style.display = "block";
        let finalAmount = this.shadowRoot.querySelector(".checkoutAmount");
        let amounts = this.shadowRoot.querySelectorAll(".total");

        let sum = 0;
        for (var i = 0; i < amounts.length; i++) {
          sum = sum + parseFloat(amounts[i].childNodes[0].nodeValue);
        }
        finalAmount.innerHTML = sum;
        totalItems.innerHTML = `(${cartProducts.length} item)`;
        navCart.innerHTML = `${cartProducts.length} items`;
      }
    });

    cartBtn.onclick = function () {
      modal.style.display = "block";
      container.style.position = "absolute";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style["z-index"] = "100";
      fadeModal.style.background = "#000";
      fadeModal.style.opacity = "0.8";
      fadeModal.style["z-index"] = "1";
      fadeModal.style.position = "absolute";
      fadeModal.style.display = "block";
    };
    span.onclick = function () {
      modal.style.display = "none";
      fadeModal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  addProduct(product) {
    let totalProducts = JSON.parse(localStorage.getItem("cartValue"));
    let totalItems = this.shadow.querySelector("#totalItems");
    let navCart = this.shadow.querySelector("#navCart");
    this.createCart(product);
    if (totalProducts) {
      totalItems.innerHTML = `(${totalProducts.length + 1} item)`;
      navCart.innerHTML = `${totalProducts.length + 1} items`;
    } else {
      totalItems.innerHTML = `(1 item)`;
      navCart.innerHTML = `1 item`;
    }
  }

  // addItems(val) {
  //   let selectedData = val.currentTarget.data;
  //   console.log("product: ", selectedData);
  //   let selectedClass = `.class${selectedData.id}`;
  //   console.log("selected classs: ", selectedClass);

  //   let item = this.shadowRoot.querySelector(selectedClass);
  //   console.log("item: ", item);
  // }

  // reduceItems(val) {}

  cartProducts() {
    let lowestPrice = this.shadowRoot.querySelector(".lowestPrice");
    let checkout = this.shadowRoot.querySelector(".checkout");
    let modalColor = this.shadowRoot.querySelector(".shoppingCart");

    let cartProducts = JSON.parse(localStorage.getItem("cartValue"));
    let totalItems = this.shadow.querySelector("#totalItems");
    let navCart = this.shadow.querySelector("#navCart");
    if (cartProducts && cartProducts.length > 0) {
      modalColor.background = "#eeeeee";
      lowestPrice.style.display = "block";
      checkout.style.display = "block";
      if (this.shadowRoot.querySelector("#cartContainer")) {
        let shoppingcartContainer =
          this.shadowRoot.querySelector("#cartContainer");
        shoppingcartContainer.style.display = "none";
      }
      for (let i = 0; i < cartProducts.length; i++) {
        this.createCart(cartProducts[i]);
      }
      let finalAmount = this.shadowRoot.querySelector(".checkoutAmount");
      let amounts = this.shadowRoot.querySelectorAll(".total");

      let sum = 0;
      for (var i = 0; i < amounts.length; i++) {
        sum = sum + parseFloat(amounts[i].childNodes[0].nodeValue);
      }
      finalAmount.innerHTML = sum;
      totalItems.innerHTML = `(${cartProducts.length} item)`;
      navCart.innerHTML = `${cartProducts.length} items`;
    } else {
      totalItems.innerHTML = ``;
      navCart.innerHTML = `0 item`;
      lowestPrice.style.display = "none";
      checkout.style.display = "none";
      modalColor.style.background = "#fff";
      let cartContainer = document.createElement("section");
      cartContainer.id = "cartContainer";
      let emptyCart = document.createElement("div");
      emptyCart.id = "emptyCart";
      emptyCart.setAttribute("class", "emptyCart");
      let cartHeading = document.createElement("h4");
      cartHeading.innerHTML = "No items in your cart";
      let cartDescription = document.createElement("p");
      cartDescription.innerHTML = "Your favourite items are just a click away";
      emptyCart.appendChild(cartHeading);
      emptyCart.appendChild(cartDescription);
      cartContainer.appendChild(emptyCart);
      this.insertAfter(lowestPrice, cartContainer);

      let cartData = this.shadowRoot.querySelector("#emptyCart");
      let shoppingContainer = document.createElement("div");
      shoppingContainer.setAttribute("class", "emptyContainer");
      let startShopping = document.createElement("button");
      startShopping.innerHTML = "Start Shopping";
      startShopping.setAttribute("class", "btn btn-primary");
      startShopping.style.width = "100%";
      startShopping.style.padding = "15px";
      shoppingContainer.appendChild(startShopping);
      this.insertAfter(cartData, shoppingContainer);
    }
  }

  createCart(product) {
    let cardSection = document.createElement("section");
    cardSection.setAttribute("class", `card cartItems product${product.id}`);

    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "cartImage");

    let cartImage = document.createElement("img");
    cartImage.setAttribute("src", product.imageURL);
    cartImage.setAttribute("alt", product.name);

    imageContainer.appendChild(cartImage);
    cardSection.appendChild(imageContainer);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cartContent");

    let cardHeading = document.createElement("h4");
    cardHeading.innerHTML = product.name;

    let reduceButton = document.createElement("button");
    reduceButton.setAttribute("class", "btn btn-primary btn-round");
    reduceButton.innerHTML = "-";
    // reduceButton.addEventListener("click", this.reduceItems.bind(product));
    reduceButton.addEventListener("click", (evt) => {
      let selectedCount = `.itemNumbers${product.id}`;
      let selectedAmount = `.totalAmount${product.id}`;
      let selectedProduct = `.product${product.id}`;
      let navCart = this.shadow.querySelector("#navCart");

      let item = this.shadowRoot.querySelector(selectedCount);
      if (Number(item.innerHTML) == 1) {
        let selectedProducts = this.shadowRoot.querySelector(selectedProduct);
        selectedProducts.remove();
        let cartItems = JSON.parse(localStorage.getItem("cartValue"));
        let filteredArr = cartItems.filter((e) => {
          return e.id != product.id;
        });
        localStorage.setItem("cartValue", JSON.stringify(filteredArr));
        navCart.innerHTML = `${filteredArr.length} items`;
        if (filteredArr.length == 0) {
          this.cartProducts();
        }
      } else {
        item.innerHTML = Number(item.innerHTML) - 1;
        let total = this.shadowRoot.querySelector(selectedAmount);
        total.innerHTML = Number(item.innerHTML) * product.price;
      }

      let finalAmount = this.shadowRoot.querySelector(".checkoutAmount");
      let amounts = this.shadowRoot.querySelectorAll(".total");

      let sum = 0;
      for (var i = 0; i < amounts.length; i++) {
        sum = sum + parseFloat(amounts[i].childNodes[0].nodeValue);
      }
      finalAmount.innerHTML = sum;
    });
    reduceButton.data = product;

    let itemCount = document.createElement("span");
    itemCount.setAttribute("class", `itemNumbers itemNumbers${product.id}`);
    itemCount.innerHTML = "1";

    let addButton = document.createElement("button");
    addButton.setAttribute("class", "btn btn-primary btn-round");
    addButton.innerHTML = "+";
    // addButton.addEventListener("click", this.addItems.bind(product));
    // addButton.data = product;
    addButton.addEventListener("click", (evt) => {
      let selectedCount = `.itemNumbers${product.id}`;
      let selectedAmount = `.totalAmount${product.id}`;

      let item = this.shadowRoot.querySelector(selectedCount);
      item.innerHTML = Number(item.innerHTML) + 1;

      let total = this.shadowRoot.querySelector(selectedAmount);
      total.innerHTML = Number(item.innerHTML) * product.price;

      let finalAmount = this.shadowRoot.querySelector(".checkoutAmount");
      let amounts = this.shadowRoot.querySelectorAll(".total");

      let sum = 0;
      for (var i = 0; i < amounts.length; i++) {
        sum = sum + parseFloat(amounts[i].childNodes[0].nodeValue);
      }
      finalAmount.innerHTML = sum;
    });
    addButton.data = product;

    cardContent.appendChild(cardHeading);
    cardContent.appendChild(reduceButton);
    cardContent.appendChild(itemCount);
    cardContent.appendChild(addButton);

    let multiply = document.createElement("span");
    multiply.setAttribute("class", "cross multiply");
    multiply.innerHTML = "x";

    cardContent.appendChild(multiply);

    let productAmount = document.createElement("span");
    productAmount.innerHTML = product.price;

    let totalAmount = document.createElement("span");
    totalAmount.innerHTML = product.price;
    totalAmount.setAttribute(
      "class",
      `float-right mR10 totalAmount${product.id} total`
    );

    cardContent.appendChild(productAmount);
    cardContent.appendChild(totalAmount);

    cardSection.appendChild(cardContent);

    let cartHeading = this.shadow.querySelector("#cartHeading");
    this.insertAfter(cartHeading, cardSection);
  }

  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    /* Navbar starts */
      nav {
        display: flex;
        justify-content: space-between;
        color: #4a4a4c;
        -webkit-box-shadow: 0 8px 6px -6px #999;
        -moz-box-shadow: 0 8px 6px -6px #999;
        box-shadow: 0 8px 6px -6px #999;
      }
      .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 80px;
        cursor: pointer;
        margin-left: 8%;
        margin-top: 10px;
      }
      .leftNav a {
        margin-left: 20px;
        color: #7b8181;
      }

      .rightNav {
        margin-top: -12px;
        margin-right: 8%;
      }
      .rightNav ul li {
        list-style-type: none;
        display: inline-block;
        margin-left: 4px;
        cursor: pointer;
      }
      .cart {
        background-color: #eeeeee;
        padding: 15px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cartImg {
        width: 30px;
        height: auto;
      }
      /* Navbar ends */

      /* Cart starts */
      article.shoppingCart {
        background-color: #eeeeee;
        position: absolute;
        width: 600px;
        height: 90vh;
        display: block;
        z-index: 1;
        display: none;
        right: 9%;
        border: 1px solid #ccc;
        overflow: auto;
        z-index: 100;
      }
      .fadebackground {
        position:absolute;
        top : 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        content:"";
        pointer-events: none;
        z-index:100;
        opacity: .5
      }
      .card {
        background-color: #fff;
        padding: 10px 5px;
        margin-bottom: 10px;
      }
      .cardHeading {
        background: #000;
        color: #fff;
      }
      .cross {
        width: 24px;
        cursor: pointer;
      }
      .card h3 {
        margin: 10px;
      }
      .emptyCart {
        text-align: center;
        margin-top: 50%;
        transform: translate(0, -100%);
      }
      .emptyContainer {
        width: 600px;
        position: absolute;
        bottom: 0px;
      }
      .cartItems {
        display: flex;
      }
      .cartImage {
        width: 100px;
        margin-right: 7px;
      }
      .cartImage img {
        width: 100%;
      }
      .cartContent {
        flex-grow: 1;
      }
      .itemNumbers {
        margin-left: 10px;
        margin-right: 10px;
      }
      .multiply {
        margin-left: 10px;
        margin-right: 5px;
        width: 15px;
        padding: 0px;
      }
      .lowestPrice {
        padding: 10px 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 8px;
      }
      .lowestPriceImg {
        width: 5rem;
      }
      .lowestPriceImg img {
        width: 100%;
      }
      .checkout {
        position: sticky;
        bottom: 0px;
        background: #fff;
        width: 100%;
        padding-top: 1px;
      }
      .text-center {
        text-align: center;
      }
      .checkoutBtn {
        display: flex;
        justify-content: space-between;
        width: 98%;
        padding: 15px;
        margin: 0px 1% 0px 1%;
      }
      /* Cart ends */
      .float-right {
        float: right;
      }
      .btn {
        border: none;
        padding: 5px 10px;
        font-family: sans-serif;
        cursor: pointer;
      }
      .btn-primary {
        color: #fff;
        background-color: #d20057;
      }
      .btn-round {
        border-radius: 20px;
      }
      .btn-curve {
        border-radius: 8px;
      }
      .hideLinkStyling {
        text-decoration: inherit;
        color: inherit;
      }
      .cursor-pointer {
        cursor: pointer;
      }

      /* Cart ends */

      /* Mobile design */
@media only screen and (max-width: 600px) {
  .main-header {
    gap: 0px;
    margin-left: 0;
  }
  .logoImg {
    width: 100px;
  }
  .rightNav {
    margin-right: 0;
  }
  .rightNav ul {
    display: inline-flex;
  }
  .rightNav ul li {
    display: inherit;
  }
  .cartPosition {
    padding-left: 43px;
  }

  /* Shopping cart style starts */
  article.shoppingCart {
    height: 85vh;
    width: 100%;
    right: 0%;
    border: 1px solid #ccc;
  }
  .emptyContainer {
    width: 100%;
  }
  .cardHeading {
    background: none;
    color: #000;
  }
  /* Shopping cart style ends */

  /* Tablet design */
  @media only screen and (min-width: 600px) {
    .rightNav {
      margin-right: 0;
    }
    /* Shopping cart style starts */
    .cardHeading {
      background: none;
      color: #000;
    }
    article.shoppingCart {
      height: 90vh;
      width: 100%;
      right: 0%;
      border: 1px solid #ccc;
    }
    /* Shopping cart style ends */
  }


    </style>
    <nav id="nav">
        <header class="main-header">
          <picture>
            <source
              media="(min-width: 380px"
              srcset="./../static/images/logo.png"
            />
            <source
              media="(min-width: 900px"
              srcset="./../static/images/logo_2x.png"
            />
            <img
              src="./../static/images/logo.png"
              alt="Sabka bazar home"
              class="logoImg"
            />
          </picture>
          <div class="leftNav">
            <a class="hideLinkStyling" href="home.html">Home</a>
            <a class="hideLinkStyling" href="products.html">Products</a>
          </div>
        </header>
        <div class="rightNav">
          <ul>
            <li><a href="login.html" class="hideLinkStyling">SignIn</a></li>
            <li>
              <a href="register.html" class="hideLinkStyling">Register</a>
            </li>
          </ul>
          <div id="cartButton" class="cartPosition cursor-pointer">
            <a class="cart hideLinkStyling" area-label="cart items">
              <img
                aria-hidden="true"
                src="./../static/images/cart.svg"
                class="cartImg"
              />
              <span id="navCart">0 items</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Cart -->
      <article id="myModal" class="shoppingCart">
        <div id="cartHeading" class="card cardHeading">
          <h3>
            <strong>My Cart </strong><span id="totalItems" class="fontNormal">(1 item)</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="cross float-right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </h3>
        </div>
        <section class="card lowestPrice">
          <div class="lowestPriceImg">
            <img src="./../static/images/lowest-price.png" />
          </div>
          <div>You won't find it cheaper anywhere</div>
        </section>
        <section class="checkout">
          <div>
            <p class="text-center">Promocode can be applied on payment page</p>
          </div>
          <button class="btn btn-primary btn-curve checkoutBtn">
            <div>Proceed to Checkout</div>
            <div class="checkoutAmount">Rs.187 ></div>
          </button>
        </section>
      </article>
    `;
  }
}

customElements.define("app-navbar", MyNavbar);
