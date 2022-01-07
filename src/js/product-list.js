const fruits = "5b6899953d1a866534f516e2";
const bakeryCakesDairy = "5b6899123d1a866534f516de";
const beverages = "5b675e5e5936635728f9fc30";
const beautyHygiene = "5b68994e3d1a866534f516df";
const baby = "5b6899683d1a866534f516e0";

let productContainerEl = document.getElementById("product-container");
let products1;
let selectedCategoryProducts = [];

(function getProducts() {
  fetch("http://localhost:8080/productList")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong !");
    })
    .then(function (products) {
      products1 = products;
      renderProducts(products);
    })
    .catch(function (err) {
      console.log(err);
    });
})();

function renderProducts(products) {
  productContainerEl.innerHTML = "";
  products.forEach((product) => {
    let itemContainerDiv = document.createElement("div");
    itemContainerDiv.classList.add("product-item");

    // Product Heading
    let headingDiv = document.createElement("div");
    headingDiv.classList.add("product-heading");

    // Product Name
    let productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerText = product.name.slice(0, 50);
    headingDiv.append(productName);
    itemContainerDiv.append(productName);

    // Product Image
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("product-image");
    let imageEl = document.createElement("img");
    imageEl.src = `../..${product.imageURL}`;
    imageDiv.append(imageEl);
    itemContainerDiv.append(imageDiv);

    //Product Description
    let productDescriptionDiv = document.createElement("div");
    productDescriptionDiv.classList.add("product-description");
    let descriptionP = document.createElement("p");
    descriptionP.innerText = product.description;
    productDescriptionDiv.append(descriptionP);
    itemContainerDiv.append(productDescriptionDiv);

    //Product Purchase Section
    let purchaseDiv = document.createElement("div");
    purchaseDiv.classList.add("product-purchase");
    let priceSpan = document.createElement("span");
    priceSpan.innerText = `MRP Rs.${product.price}`;
    purchaseDiv.append(priceSpan);
    let buyButton = document.createElement("button");
    buyButton.innerText = "Buy Now";
    purchaseDiv.append(buyButton);

    // Attaching created individual product to container
    itemContainerDiv.append(purchaseDiv);
    productContainerEl.append(itemContainerDiv);
  });
}
