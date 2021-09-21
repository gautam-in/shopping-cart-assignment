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

async function allCategories() {
  let allCategories = await getCategories();
  displayCategories(allCategories);
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
      let newLi = document.createElement("li");
      newLi.classList.add("category-products");
      newLi.classList.add(index === 0 ? "active" : "inactive");

      let newCategory = document.createElement("div");
      newCategory.classList.add("category-products__heading");
      let newCategoryLink = document.createElement("button");
      newCategoryLink.innerText = categoryProduct.category.name;
      newCategory.appendChild(newCategoryLink);
      // Toggle products
      newCategoryLink.addEventListener("click", toggleCategory);
      // Add Accessibility feature
      newCategoryLink.setAttribute(
        "aria-expanded",
        (index === 0 && true).toString()
      );

      let newProducts = document.createElement("ul");
      newProducts.classList.add("category-products__products");
      let newProductsLi = document.createElement("li");

      for (const product of categoryProduct["products"]) {
        let productWrapper = document.createElement("div");
        let productHeading = document.createElement("h3");
        productHeading.innerText = product.name;

        let productImage = document.createElement("img");
        productImage.classList.add("img-responsive");
        productImage.setAttribute("src", product.imageURL);
        productImage.setAttribute("alt", product.name);

        let productInfo = document.createElement("p");
        productInfo.innerText = product.description;

        let productCartbutton = document.createElement("button");
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
  if (parentLi.classList.contains("active")) {
    parentLi.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
  } else {
    parentLi.classList.add("active");
    button.setAttribute("aria-expanded", "true");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  allCategories();
  allCategoriesProducts();
  bindEventCart();
  cartCounter();
});
