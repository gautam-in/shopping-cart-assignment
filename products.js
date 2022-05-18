const BASE_URL = "http://localhost:5100";
let itemsAddedToCart = 0;
const mainWrapper = document.getElementById("mainWrapper");
const cartInventory = document.getElementById("cartInventory");
const cartHeading = document.getElementById("cartHeading");
const sidebarNavUnorganizedList = document.querySelector("#sidebarNav ul");
const shoppingCartDropdownCartList = document.querySelector(
  "#shoppingCartDropdown .cart-list"
);
const shoppingCartDropdownBody = document.querySelector(
  "#shoppingCartDropdown .body"
);
const shoppingCartDropdownEmptyBody = document.querySelector(
  "#shoppingCartDropdown .empty-body"
);
const shoppingCartDropdownFooter = document.querySelector(
  "#shoppingCartDropdown .cart-footer"
);
const shoppingCartDropdownFooterTotalAmount = document.querySelector(
    "#shoppingCartDropdown .cart-footer .total-amount"
  );
const shoppingCartDropdownEmptyFooter = document.querySelector(
  "#shoppingCartDropdown .empty-cart-footer"
);
const shoppingCategoriesDropdownUnorganizedList = document.querySelector(
  ".shopping-category-dropdown ul"
);
const itemCount = document.getElementById("itemCount");
const itemCountTextNode = document.createTextNode("1");
const productsSection = document.getElementById("productsSection");
const shoppingCartDropdownBackdrop = document.getElementById(
  "shoppingCartDropdownBackdrop"
);
const shoppingCartDropdown = document.getElementById("shoppingCartDropdown");
const setAttributes = (element, attributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};
let productList = [];
let productsGroupedByCategory = {};
let productsGroupedById = {};

function attachProductsToDom(products) {
  const productsDocumentFragment = document.createDocumentFragment();

  productList = products.map((product) => {
    let productDiv = document.createElement("div");
    let productHeader = document.createElement("header");
    let productHeading = document.createElement("h6");
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    let productHeadingTextNode = document.createTextNode(product.name);
    let figcaptionTextNode = document.createTextNode(product.description);
    let footer = document.createElement("footer");
    let span = document.createElement("span");
    let spanTextNode = document.createTextNode(`MRP Rs. ${product.price}`);
    let button = document.createElement("button");
    let buttonTextNode = document.createTextNode("Buy Now");

    const productDivAttributes = {
      class: "product",
      id: product.id,
      "data-category": product.category,
    };
    const imageAttributes = {
      src: product.imageURL,
      alt: product.name,
    };
    const footerAttributes = {
      class: "pricing-section",
    };
    const spanAttributes = {
      class: "price",
    };
    const buttonAttributes = {
      class: "btn btn-sm btn-danger shopping-category-btn buy-now-btn",
      type: "button",
      id: product.id,
      "data-category": product.category,
    };

    setAttributes(productDiv, productDivAttributes);
    setAttributes(image, imageAttributes);
    setAttributes(footer, footerAttributes);
    setAttributes(span, spanAttributes);
    setAttributes(button, buttonAttributes);

    productDiv.appendChild(productHeader);
    productHeader.appendChild(productHeading);
    productHeading.appendChild(productHeadingTextNode);
    productDiv.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    figcaption.appendChild(figcaptionTextNode);
    productDiv.appendChild(footer);
    footer.appendChild(span);
    span.appendChild(spanTextNode);
    footer.appendChild(button);
    button.appendChild(buttonTextNode);
    button.addEventListener("click", buyNow);
    productsDocumentFragment.appendChild(productDiv);

    return product;
  });

  if (sidebarNavUnorganizedList.hasChildNodes()) {
    productsSection.replaceChildren(productsDocumentFragment);
  } else {
    productsSection.appendChild(productsDocumentFragment);
  }
}

function renderShoppingCategoriesSideNav(categories) {
  const shoppingCategoriesSideNav = document.createDocumentFragment();
  const filteredCategories = categories.filter((category) => category.enabled);

  filteredCategories.map((category) => {
    let sidebarNavListItem = document.createElement("li");
    let sidebarNavListItemAnchor = document.createElement("a");
    let sidebarNavListItemAnchorTextNode = document.createTextNode(
      category.name
    );

    const sidebarNavListItemAttributes = {
      class: "nav-item",
    };
    const sidebarNavListItemAnchorAttributes = {
      class: "nav-link",
      "aria-current": "page",
      href: "#",
      "data-category-id": category.id,
    };

    setAttributes(sidebarNavListItem, sidebarNavListItemAttributes);
    setAttributes(sidebarNavListItemAnchor, sidebarNavListItemAnchorAttributes);

    sidebarNavListItem.appendChild(sidebarNavListItemAnchor);
    sidebarNavListItemAnchor.appendChild(sidebarNavListItemAnchorTextNode);
    sidebarNavListItemAnchor.addEventListener("click", filterByCategory);
    shoppingCategoriesSideNav.appendChild(sidebarNavListItem);
  });

  sidebarNavUnorganizedList.appendChild(shoppingCategoriesSideNav);
}

function renderShoppingCategoriesDropdownOptions(categories) {
  const shoppingCategoriesDropdownOptions = document.createDocumentFragment();
  const filteredCategories = categories.filter((category) => category.enabled);

  filteredCategories.map((category) => {
    let dropdownOptionListItem = document.createElement("li");
    let dropdownOptionListItemAnchor = document.createElement("a");
    let dropdownOptionListItemAnchorTextNode = document.createTextNode(
      category.name
    );

    const dropdownOptionListItemAnchorAttributes = {
      class: "dropdown-item",
      href: "#",
      "data-category-id": category.id,
    };

    setAttributes(
      dropdownOptionListItemAnchor,
      dropdownOptionListItemAnchorAttributes
    );

    dropdownOptionListItem.appendChild(dropdownOptionListItemAnchor);
    dropdownOptionListItemAnchor.appendChild(
      dropdownOptionListItemAnchorTextNode
    );
    dropdownOptionListItemAnchor.addEventListener("click", filterByCategory);
    shoppingCategoriesDropdownOptions.appendChild(dropdownOptionListItem);
  });

  shoppingCategoriesDropdownUnorganizedList.appendChild(
    shoppingCategoriesDropdownOptions
  );
}

function fetchData(apiEndPoint) {
  fetch(`${BASE_URL}/${apiEndPoint}`)
    .then((response) => response.json())
    .then((data) => {
      if (apiEndPoint === "products") {
        productsGroupedByCategory = groupProductsBySpecificKey(
          data,
          "category"
        );
        productsGroupedById = groupProductsBySpecificKey(data, "id");
        attachProductsToDom(data);
      } else if (apiEndPoint === "categories") {
        renderShoppingCategoriesSideNav(data);
        renderShoppingCategoriesDropdownOptions(data);
      }
    });
}

function onLoad() {
  cartInventory.innerText = `${itemsAddedToCart} items`;
  cartHeading.innerText = "My Cart";
  fetchData("products");
  fetchData("categories");
}

function openShoppingCart(event) {
  event.preventDefault();
  shoppingCartDropdownBackdrop.style.display = "block";
  shoppingCartDropdown.style.display = "flex";
}

function closeShoppingCart() {
  shoppingCartDropdownBackdrop.style.display = "none";
  shoppingCartDropdown.style.display = "none";
}

function decrementCartItemCount(event) {
  event.preventDefault();

  const pricePerItem = event.currentTarget.dataset.price;
  const itemStock = event.currentTarget.dataset.stock;
  let currentItemCountElement = document.getElementById(
    `itemCount${event.currentTarget.dataset.id}`
  );
  let totalPriceElement = document.getElementById(
    `totalPrice${event.currentTarget.dataset.id}`
  );
  let currentItemCount = +currentItemCountElement.innerText;

  currentItemCount > 1 && currentItemCount <= itemStock
    ? currentItemCount--
    : 1;
  currentItemCountElement.innerText = currentItemCount;
  totalPriceElement.innerText = `Rs. ${currentItemCount * pricePerItem}`;
}

function incrementCartItemCount(event) {
    event.preventDefault();

    const pricePerItem = event.currentTarget.dataset.price;
    const itemStock = event.currentTarget.dataset.stock;
    let currentItemCountElement = document.getElementById(
      `itemCount${event.currentTarget.dataset.id}`
    );
    let totalPriceElement = document.getElementById(
        `totalPrice${event.currentTarget.dataset.id}`
      );
    let currentItemCount = +currentItemCountElement.innerText;
  
    currentItemCount >= 1 && currentItemCount < itemStock
      ? currentItemCount++
      : 50;
    currentItemCountElement.innerText = currentItemCount;
    totalPriceElement.innerText = `Rs. ${currentItemCount * pricePerItem}`;
}

function filterByCategory(event) {
  event.preventDefault();
  attachProductsToDom(
    productsGroupedByCategory[event.currentTarget.dataset.categoryId]
  );
}

function groupProductsBySpecificKey(collection, key) {
  return _.groupBy(collection, key);
}

function updateCartItemCount() {
  itemsAddedToCart++;
  cartInventory.innerText = `${itemsAddedToCart} items`;
  cartHeading.innerText = `My Cart (${itemsAddedToCart} item${
    itemsAddedToCart > 1 ? "s" : ""
  })`;
}

function toggleCartBodyContent() {
  shoppingCartDropdownEmptyBody.classList.add("d-none");
  shoppingCartDropdownBody.classList.remove("d-none");
  shoppingCartDropdownEmptyFooter.classList.add("d-none");
  shoppingCartDropdownFooter.classList.remove("d-none");
}

function addProductToCart(productAddedToCart) {
  let shoppingCartProducts = document.createDocumentFragment();
  let cardDiv = document.createElement("div");
  let cardBodyDiv = document.createElement("div");
  let productImg = document.createElement("img");
  let cartItemContentDiv = document.createElement("div");
  let heading4 = document.createElement("h4");
  let heading6 = document.createElement("h6");
  let cartCalculationDiv = document.createElement("div");
  let leftDiv = document.createElement("div");
  let minusIconAnchor = document.createElement("a");
  let minusIcon = document.createElement("i");
  let itemCountSpan = document.createElement("span");
  let plusIconAnchor = document.createElement("a");
  let plusIcon = document.createElement("i");
  let xmarkIcon = document.createElement("i");
  let itemPriceSpan = document.createElement("span");
  let rightDiv = document.createElement("div");
  let totalPriceSpan = document.createElement("span");

  const productImgAttributes = {
    src: productAddedToCart.imageURL,
    alt: productAddedToCart.name,
    width: "80",
    height: "80",
  };
  const itemCountSpanAttributes = {
    class: "item-count",
    id: `itemCount${productAddedToCart.id}`,
  };
  const minusIconAnchorAttributes = {
    href: "#",
    "data-id": productAddedToCart.id,
    "data-price": productAddedToCart.price,
    "data-stock": productAddedToCart.stock,
  };
  const plusIconAnchorAttributes = {
    href: "#",
    "data-id": productAddedToCart.id,
    "data-price": productAddedToCart.price,
    "data-stock": productAddedToCart.stock,
  };

  cardDiv.classList.add("card");
  cardBodyDiv.classList.add("card-body");
  cartItemContentDiv.classList.add("cart-item-content");
  heading4.classList.add("d-none", "d-md-flex");
  heading4.innerText = productAddedToCart.name;
  heading6.innerText = productAddedToCart.name;
  itemCountSpan.innerText = 1;
  itemPriceSpan.innerText = `Rs. ${productAddedToCart.price}`;
  totalPriceSpan.innerText = `Rs. ${productAddedToCart.price}`;
  totalPriceSpan.setAttribute('id', `totalPrice${productAddedToCart.id}`);
  cartCalculationDiv.classList.add("cart-calculation");
  leftDiv.classList.add("left");
  minusIcon.classList.add("fa-solid", "fa-circle-minus");
  plusIcon.classList.add("fa-solid", "fa-circle-plus");
  xmarkIcon.classList.add("fa-solid", "fa-xmark");
  itemPriceSpan.classList.add("item-price");
  rightDiv.classList.add("right");
  totalPriceSpan.classList.add("total-price");

  setAttributes(productImg, productImgAttributes);
  setAttributes(itemCountSpan, itemCountSpanAttributes);
  setAttributes(minusIconAnchor, minusIconAnchorAttributes);
  setAttributes(plusIconAnchor, plusIconAnchorAttributes);
  minusIconAnchor.addEventListener("click", decrementCartItemCount);
  plusIconAnchor.addEventListener("click", incrementCartItemCount);

  cardDiv.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(productImg);
  cardBodyDiv.appendChild(cartItemContentDiv);
  cartItemContentDiv.appendChild(heading4);
  cartItemContentDiv.appendChild(heading6);
  cartItemContentDiv.appendChild(cartCalculationDiv);
  cartCalculationDiv.appendChild(leftDiv);
  cartCalculationDiv.appendChild(rightDiv);
  leftDiv.appendChild(minusIconAnchor);
  minusIconAnchor.appendChild(minusIcon);
  leftDiv.appendChild(itemCountSpan);
  leftDiv.appendChild(plusIconAnchor);
  plusIconAnchor.appendChild(plusIcon);
  leftDiv.appendChild(xmarkIcon);
  leftDiv.appendChild(itemPriceSpan);
  rightDiv.appendChild(totalPriceSpan);
  shoppingCartProducts.appendChild(cardDiv);
  shoppingCartDropdownCartList.appendChild(shoppingCartProducts);
}

function postData(apiEndPoint, productId) {
  fetch(`${BASE_URL}/${apiEndPoint}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then(() => {
      let productAddedToCart = productsGroupedById[productId][0];

      updateCartItemCount();
      toggleCartBodyContent();
      addProductToCart(productAddedToCart);
      console.log(productAddedToCart);
    });
}

function buyNow(event) {
  postData("addToCart", event.currentTarget.id);
}
