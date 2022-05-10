let categoryId = null;

async function fetchCategories() {
  try {
    let response = await fetch("http://localhost:5000/categories");
    let data = await response.json();
    return data;
  } catch (error) {
    return new Error("Error while fetching categories");
  }
}
async function fetchProducts() {
  try {
    let response = await fetch("http://localhost:5000/products");
    let data = await response.json();
    return data;
  } catch (error) {
    return new Error("Error while fetching categories");
  }
}

async function setCategory(cId) {
  categoryId = cId;
  renderProduct();
}

async function renderCategories() {
  let categories = await fetchCategories();
  if (categories.length) {
    let categoriesDOMElement = document.getElementById("categories");
    categories
      .filter((category) => category.enabled)
      .forEach((category) => {
        let categoryElement = document.createElement("button");
        categoryElement.className = "category";
        categoryElement.innerText = category.name;
        categoryElement.addEventListener("click", () =>
          setCategory(category.id)
        );
        categoriesDOMElement.appendChild(categoryElement);
      });
  }
}

function createProduct(product) {
  let productCard = document.createElement("section");
  productCard.className = "product__card";

  let cardHeader = document.createElement("header");
  let productHeading = document.createElement("h1");
  productHeading.innerText = product.name;
  cardHeader.appendChild(productHeading);

  let pImage = document.createElement("img");
  pImage.src = `../../../${product.imageURL}`;
  pImage.style.height = "150px";
  pImage.style.width = "250px";
  pImage.alt = product.sku;

  let cardFooter = document.createElement("footer");
  let price = document.createElement("h4");
  price.innerText = `Rs. ${product.price}`;

  let buyButton = document.createElement("button");
  buyButton.innerText = "Buy Now";
  cardFooter.appendChild(price);
  cardFooter.appendChild(buyButton);

  productCard.appendChild(cardHeader);
  productCard.appendChild(pImage);
  productCard.appendChild(cardFooter);

  return productCard;
}

async function renderProduct() {
  let products = await fetchProducts();
  if (categoryId) {
    products = products.filter((p) => p.category === categoryId);
  }

  if (products.length) {
    let productsDOMElement = document.getElementById("products");
    productsDOMElement.innerHTML = "";
    products.forEach((product) => {
      productsDOMElement.appendChild(createProduct(product));
    });
  }
}
renderCategories();
renderProduct();
