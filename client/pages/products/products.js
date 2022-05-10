let categoryId = null;
let products;
let cart;

function getCategoryFromURL() {
  let searchParams = new URLSearchParams(window.location.search);
  let value = searchParams.get("category");
  if (value) {
    setCategory(value);
  }
}

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
    // add category all products to reset category filter
    categories = [
      ...categories,
      { name: "All Products", id: null, enabled: true },
    ];

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

async function renderMobileCategories() {
  let categories = await fetchCategories();
  if (categories.length) {
    let mobCategoriesDOMElement = document.getElementsByTagName("select");
    mobCategoriesDOMElement[0].addEventListener("change", (e) => {
      setCategory(e.target.value);
    });

    // add category all products to reset category filter
    categories = [
      ...categories,
      { name: "All Products", id: null, enabled: true },
    ];

    categories
      .filter((category) => category.enabled)
      .forEach((category) => {
        let categoryOption = document.createElement("option");
        categoryOption.innerText = category.name;
        categoryOption.value = category.id;
        mobCategoriesDOMElement[0].appendChild(categoryOption);
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

  let main = document.createElement("main");

  let pImage = document.createElement("img");
  pImage.src = `../../../${product.imageURL}`;
  pImage.style.height = "150px";
  pImage.style.width = "250px";
  pImage.alt = product.sku;

  let pdes = document.createElement("div");
  let para = document.createElement("p");
  para.innerText = product.description;
  pdes.appendChild(para);

  main.appendChild(pImage);
  main.appendChild(pdes);

  let cardFooter = document.createElement("footer");
  let price = document.createElement("h4");
  price.id = "price";
  price.innerText = `Rs. ${product.price}`;

  let buyButton = document.createElement("button");
  let span = document.createElement("span");
  span.innerText = ` @ Rs.${product.price}`;
  buyButton.innerText = "Buy Now";
  buyButton.appendChild(span);
  buyButton.addEventListener("click", () => {
    buyProduct(product);
  });
  cardFooter.appendChild(price);
  cardFooter.appendChild(buyButton);

  productCard.appendChild(cardHeader);
  productCard.appendChild(main);
  productCard.appendChild(cardFooter);

  return productCard;
}

async function renderProduct() {
  products = await fetchProducts();
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

function buyProduct(p) {
  let product = products.filter((d) => {
    if (p.id === d.id) return d;
  });
  if (!cart) {
    cart = new Cart([], 1);
    cart.render();
    cart.showCart();
    cart.addCartItem(product);
  } else {
    cart.addCartItem(product);
  }
}

function openCart() {
  if (cart) cart.showCart();
  else {
    cart = new Cart([], 0);
    cart.render();
    cart.showCart();
  }
}
getCategoryFromURL();
renderCategories();
renderMobileCategories();
renderProduct();
