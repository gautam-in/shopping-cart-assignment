import { getCategories } from "./modules/categories";
import { getCategoryProducts } from "./modules/products";
import {
  addToCartHandler,
  bindEventCart,
  cartCounter,
} from "./modules/addToCart";

function displayCategories(categories) {
  let theList = document.querySelector(".categories");
  if (theList) {
    for (const category of categories) {
      let newLi = document.createElement("li");

      let newWrapperImage = document.createElement("div");
      newWrapperImage.classList.add("category__image");
      let newCategoryImage = document.createElement("img");
      newCategoryImage.classList.add("img-responsive");
      newCategoryImage.src = category.imageUrl;
      newCategoryImage.alt = category.name;
      newWrapperImage.appendChild(newCategoryImage);

      let newWrapperInfo = document.createElement("div");
      newWrapperInfo.classList.add("category__info");
      let newInfoH2 = document.createElement("h2");
      newInfoH2.innerText = category.name;
      let newInfoParagraph = document.createElement("p");
      newInfoParagraph.innerText = category.description;
      let newInfoAnchor = document.createElement("a");
      newInfoAnchor.setAttribute("href", `products.html`);
      newInfoAnchor.innerText = `Explore ${category.key}`;

      newWrapperInfo.appendChild(newInfoH2);
      newWrapperInfo.appendChild(newInfoParagraph);
      newWrapperInfo.appendChild(newInfoAnchor);

      newLi.appendChild(newWrapperImage);
      newLi.appendChild(newWrapperInfo);

      theList.appendChild(newLi);
    }
  }
}

function displayAsideCategories(categories) {
  const theList = document.querySelector("aside ul.categories-listing");
  if (theList) {
    for (const category of categories) {
      const newLi = document.createElement("li");

      const newLiA = document.createElement("a");
      newLiA.href = "products.html";
      newLiA.innerText = category.name;

      newLi.appendChild(newLiA);
      theList.appendChild(newLi);
    }
  }
}

async function allCategories() {
  let allCategories = await getCategories();
  displayCategories(allCategories);
}

async function allAsideCategories() {
  let allCategories = await getCategories();
  displayAsideCategories(allCategories);
}

async function allCategoriesProducts() {
  const productsList = [];
  const allCategories = await getCategories();
  let newEntry = { category: null, products: null };

  for (const category of allCategories) {
    newEntry.category = category;
    newEntry.products = await getCategoryProducts(category.id);
    productsList.push(newEntry);

    // Memory management - free it
    newEntry = { category: null, products: null };
  }

  displayCategoryProducts(productsList);
}

function displayCategoryProducts(productsList) {
  const theList = document.querySelector(".category-products-listing");
  let index = 0;

  if (theList) {
    for (const categoryProduct of productsList) {
      const newLi = document.createElement("li");
      newLi.classList.add("category-products");
      newLi.classList.add(index === 0 ? "active" : "inactive");

      const newCategory = document.createElement("div");
      newCategory.classList.add("category-products__heading");
      const newCategoryLink = document.createElement("button");
      newCategoryLink.innerText = categoryProduct.category.name;
      const newCategorySpan = document.createElement("span");
      newCategorySpan.innerHTML = `<i class="fas fa-chevron-${
        index === 0 ? "up" : "down"
      }"></i>`;

      newCategoryLink.appendChild(newCategorySpan);
      newCategory.appendChild(newCategoryLink);
      // Toggle products
      newCategoryLink.addEventListener("click", toggleCategory);
      // Add Accessibility feature
      newCategoryLink.setAttribute(
        "aria-expanded",
        (index === 0 && true).toString()
      );

      const newProducts = document.createElement("ul");
      newProducts.classList.add("category-products__products");
      const newProductsLi = document.createElement("li");

      for (const product of categoryProduct["products"]) {
        const productWrapper = document.createElement("div");
        const productHeading = document.createElement("h3");
        productHeading.innerText = product.name;

        const productImage = document.createElement("img");
        productImage.classList.add("img-responsive");
        productImage.setAttribute("src", product.imageURL);
        productImage.setAttribute("alt", product.name);

        const productInfo = document.createElement("p");
        productInfo.innerText = `${product.description.substring(0, 110)}...`;

        const productCartbutton = document.createElement("button");
        productCartbutton.innerText = `Buy Now @ Rs.${product.price}`;
        // Add to cart
        productCartbutton.addEventListener("click", () => {
          addToCartHandler(product.id);
          console.log("Clicked");
        });

        productWrapper.appendChild(productHeading);
        productWrapper.appendChild(productImage);
        productWrapper.appendChild(productInfo);
        productWrapper.appendChild(productCartbutton);

        newProductsLi.appendChild(productWrapper);
        newProducts.appendChild(newProductsLi);
      }

      newLi.appendChild(newCategory);
      newLi.appendChild(newProducts);

      theList.appendChild(newLi);
      index++;
    }
  }
}

function toggleCategory(e) {
  const button = e.currentTarget;
  const parentLi = button.parentNode.parentNode;
  const arrowIcon = button.querySelector("span");
  if (parentLi.classList.contains("active")) {
    parentLi.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
    arrowIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
  } else {
    parentLi.classList.add("active");
    button.setAttribute("aria-expanded", "true");
    arrowIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  allCategories();
  allCategoriesProducts();
  allAsideCategories();
  bindEventCart();
  cartCounter();
});
