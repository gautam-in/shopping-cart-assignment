import { getCategoryProducts } from "./modules/products";
import { getCategories } from "./modules/categories";

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

  console.log(productsList);
  displayCategoryProducts(productsList);
}

function displayCategoryProducts(productsList) {
  const theList = document.querySelector(".category-products-listing");
  let index = 0;

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
      // @TODO add to cart

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

document.addEventListener("DOMContentLoaded", allCategoriesProducts());
