let count = localStorage.getItem("count") || "0";
const id = location.search.replace("?id=", "");
function getProductsList() {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((products) => {
      products.length ? showProductsList(products) : showNoItemFound();
    });
}

function showProductsList(products) {
  const container = document.querySelector("#product-container");
  let moreThanOneProduct = true;
  for (const product of products) {
    if (id) {
      if (id === product.category) {
        moreThanOneProduct = false;
        container.appendChild(showCardData(product));
      }
    } else {
      moreThanOneProduct = false;
      container.appendChild(showCardData(product));
    }
  }
  if (moreThanOneProduct) showNoItemFound();
}

function showCardData(productDetails) {
  let productCard = document.createElement("div");
  productCard.classList.add("card");

  // Name
  let productName = document.createElement("h4");
  productName.classList.add("word-break");
  productName.innerHTML = productDetails.name;
  productCard.append(productName);

  // image
  let productImage = document.createElement("img");
  productImage.setAttribute("src", "../../../" + productDetails.imageURL);
  productImage.setAttribute("alt", productDetails.name);
  productCard.append(productImage);

  // description
  let productDescription = document.createElement("div");
  productDescription.classList.add("product-des");
  productDescription.innerHTML = productDetails.description;
  productCard.append(productDescription);

  ///
  let maxBuyContainer = document.createElement("div");
  maxBuyContainer.classList.add("buy-item-container");

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("priceContainer");
  priceContainer.innerHTML = `MRP Rs.${productDetails.price}`;
  maxBuyContainer.append(priceContainer);

  // Buy now button
  let productBuyBtn = document.createElement("button");
  productBuyBtn.classList.add("buynow-btn");
  productBuyBtn.setAttribute("id", productDetails.id);
  productBuyBtn.innerHTML = `Buy Now`;
  //productBuyBtn.innerHTML = `MRP Rs.${productDetails.price}`;
  productBuyBtn.addEventListener("click", () => addToCard(productDetails));
  maxBuyContainer.append(productBuyBtn);

  productCard.append(maxBuyContainer);

  //
  let minSizeBuyBtn = document.createElement("button");
  minSizeBuyBtn.classList.add("minSize-buynow-btn");
  minSizeBuyBtn.setAttribute("id", productDetails.id);
  minSizeBuyBtn.addEventListener("click", () => addToCard(productDetails));
  minSizeBuyBtn.innerHTML = `MRP Rs.${productDetails.price} Buy Now`;
  productCard.append(minSizeBuyBtn);

  return productCard;
}

function showNoItemFound() {
  const container = document.querySelector("#product-container");
  const noProduct = document.createElement("h2");
  noProduct.classList.add("no-item-found");
  noProduct.innerText = "Sorry!! No Product found";
  container.appendChild(noProduct);
}

function getCategoriesList() {
  fetch("http://localhost:5000/categories")
    .then((res) => res.json())
    .then((categories) => {
      const container = document.querySelector("#categories-list");
      categories.forEach((category) => {
        container.appendChild(showCategoryList(category));
      });
    });
}

function showCategoryList(category) {
  const categoryTile = document.createElement("button");
  categoryTile.classList.add("category-btn");
  categoryTile.innerText = category.name;
  categoryTile.addEventListener("click", () =>
    goToCategorySection(category.id)
  );
  return categoryTile;
}

function goToCategorySection(categoryId) {
  location.href = `../../../client/pages/products/products.html?id=${categoryId}`;
}

function addToCard(product) {
  const header = document.querySelector("uc-header");
  header?.setAttribute("count", ++count);
  alert(`${product?.name} Successfully Added`);
  checkIfProductAlreadyInCart(product);
}

function checkIfProductAlreadyInCart(product) {
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  console.log(cartData);
  if (cartData) {
    let found = false;
    for (let index = 0; index < cartData.length; index++) {
      if (cartData[index].id === product.id) {
        cartData[index].count = cartData[index].count + 1;
        found = true;
        break;
      }
    }
    if (!found) cartData.push({ ...product, count: 1 });
    console.log(cartData);
    setItemsInLocalStorage(cartData, count);
  } else {
    setItemsInLocalStorage([{ ...product, count: 1 }], 1);
  }
  console.log(localStorage.getItem("cartData"));
}

function setItemsInLocalStorage(productData, count) {
  localStorage.setItem("count", count);
  localStorage.setItem("cartData", JSON.stringify(productData));
}

getProductsList();
getCategoriesList();
