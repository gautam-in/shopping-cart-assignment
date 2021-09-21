import { getProducts } from "./products";

async function addToCart() {
  let response = await fetch("http://localhost:5000/addtocart", {
    method: "POST",
    body: JSON.stringify({ product: "Dummy" }),
  });
  let results = await response.json();
  return results;
}

function getCartItems() {
  return window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
}

function setCartItems(items) {
  // Add to localStorage
  window.localStorage.setItem("cart", JSON.stringify(items));
}

export async function addToCartHandler(productId) {
  try {
    const cart = getCartItems() || [];
    const products = await getProducts();
    const product = await products.find((e) => e.id === productId);
    const result = await addToCart();

    if (result.response === "Success") {
      const productInCart = cart.find((e) => e.product.id === productId);
      const isProductExists = !!productInCart;
      const total = isProductExists ? productInCart.total + 1 : 1;
      if (isProductExists) {
        productInCart.total = total;
      }
      const updatedCart = isProductExists
        ? [...cart]
        : [...cart, { total, product }];

      // Update to localstorage
      setCartItems(updatedCart);

      // Update Cart Number
      cartCounter();

      // @TODO show cart
      openCart();
    }
  } catch (e) {
    throw new Error(e);
  }
}

export function cartCounter() {
  const cartNumber = document.querySelector(".cart__text");
  const cart = getCartItems() || [];
  cartNumber.innerText = `${cart?.length} item${cart?.length > 0 ? "s" : ""}`;
}

function addOverlay() {
  // Disable scroll on the body element
  document.body.classList.add("no-scroll");

  if (!document.querySelector(".overlay")) {
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");
    document.body.appendChild(overlayDiv);
  }
}

function createModal() {
  const modalDiv = document.createElement("div");

  if (!document.querySelector("#shopping-cart")) {
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("id", "shopping-cart");
    modalDiv.setAttribute("aria-labelledby", "dialog1_label");
    modalDiv.setAttribute("aria-modal", "true");

    const cartItems = getCartItems();
    let totalItems = cartItems?.length;

    // Generate Cart
    const cartWrapper = document.createElement("div");
    cartWrapper.classList.add("cart-wrapper");

    const headerNode = document.createElement("header");
    const headerH2 = document.createElement("h2");
    headerH2.innerText = "My Cart";

    if (totalItems) {
      let totalPrice = 0;
      const headerSpan = document.createElement("span");
      headerSpan.innerText = `(${cartItems?.length} item${
        totalItems > 1 ? "s" : ""
      })`;
      headerNode.appendChild(headerH2);
      headerNode.appendChild(headerSpan);

      const mainNode = document.createElement("main");
      const mainUl = document.createElement("ul");
      for (const item of cartItems) {
        const mainLi = document.createElement("li");
        mainLi.classList.add("cart-item");

        const liDivImage = document.createElement("div");
        liDivImage.classList.add("cart-item__image");
        const divImage = document.createElement("img");
        divImage.setAttribute("src", item.product.imageURL);
        divImage.classList.add("img-responsive");
        liDivImage.appendChild(divImage);

        const liDivDetail = document.createElement("div");
        liDivDetail.classList.add("cart-item__detail");
        const divDetailH3 = document.createElement("h3");
        divDetailH3.innerText = item.product.name;

        const liDivDetailDiv = document.createElement("div");
        const minusButton = document.createElement("button");
        minusButton.innerText = "-";
        const itemsTotalSpan = document.createElement("span");
        itemsTotalSpan.innerText = item.total;
        const plusButton = document.createElement("button");
        plusButton.innerText = "+";
        const itemsPriceSpan = document.createElement("span");
        itemsPriceSpan.innerHTML = `X&nbsp;&nbsp;Rs.${item.product.price}`;
        liDivDetailDiv.appendChild(minusButton);
        liDivDetailDiv.appendChild(itemsTotalSpan);
        liDivDetailDiv.appendChild(plusButton);
        liDivDetailDiv.appendChild(itemsPriceSpan);

        liDivDetail.appendChild(divDetailH3);
        liDivDetail.appendChild(liDivDetailDiv);

        const liDivPrice = document.createElement("div");
        liDivPrice.classList.add("cart-item__price");
        liDivPrice.innerText = `Rs.${item.total * item.product.price}`;

        mainLi.appendChild(liDivImage);
        mainLi.appendChild(liDivDetail);
        mainLi.appendChild(liDivPrice);
        mainUl.appendChild(mainLi);
        totalPrice += item.product.price;
      }
      mainNode.appendChild(mainUl);

      const footerNode = document.createElement("footer");
      const footerP = document.createElement("p");
      footerP.innerText = "Promo code can be applied on payment page";
      const footerButton = document.createElement("button");
      const footerButtonText = document.createElement("span");
      footerButtonText.innerText = "Proceed to Checkout";
      const footerButtonTotal = document.createElement("span");
      footerButtonTotal.innerText = `Rs.${totalPrice}`;
      footerButton.appendChild(footerButtonText);
      footerButton.appendChild(footerButtonTotal);
      footerNode.appendChild(footerP);
      footerNode.appendChild(footerButton);

      cartWrapper.appendChild(headerNode);
      cartWrapper.appendChild(mainNode);
      cartWrapper.appendChild(footerNode);
    } else {
      cartWrapper.classList.add("cart-wrapper--empty");
      const headerCloseBtn = document.createElement("button");
      headerCloseBtn.classList.add("btn--close");
      headerCloseBtn.innerText = "X";
      // Close overlay
      headerCloseBtn.addEventListener("click", removeCart);

      const mainNode = document.createElement("main");
      const mainHeading = document.createElement("h4");
      mainHeading.innerText = "No items in your cart";
      const mainParagraph = document.createElement("p");
      mainParagraph.innerText = "your favourite items are just a click away";
      mainNode.appendChild(mainHeading);
      mainNode.appendChild(mainParagraph);

      const footerNode = document.createElement("footer");
      const footerLink = document.createElement("a");
      footerLink.setAttribute("href", "products.html");
      footerLink.innerText = "Start Shopping";
      footerNode.appendChild(footerLink);

      headerNode.appendChild(headerH2);
      headerNode.appendChild(headerCloseBtn);
      headerNode.appendChild(headerCloseBtn);

      cartWrapper.appendChild(headerNode);
      cartWrapper.appendChild(mainNode);
      cartWrapper.appendChild(footerNode);
    }

    modalDiv.appendChild(cartWrapper);

    document.body.appendChild(modalDiv);
    modalDiv.style.display = "block";
  }
}

export function openCart() {
  addOverlay();
  createModal();
}

export function removeCart() {
  document.body.classList.remove("no-scroll");
  document.querySelector(".overlay").remove();
  const dialog = document.querySelector("#shopping-cart");
  dialog.remove();
}

export function bindEventCart() {
  const cartButton = document.querySelector(".cart");
  cartButton.addEventListener("click", openCart);
}
