const template = require("./templates/products.handlebars");
import { getCategories } from ".";
import logo from "../static/images/logo.png";

document.addEventListener("DOMContentLoaded", async function () {
  const div = document.createElement("div");
  //  const categories = await getCategories();
  const categoryProducts = await allCategoriesProducts();
  div.innerHTML = template({
    logo: logo,
    categoryProducts: categoryProducts,
  });

  document.body.innerHTML = "";
  document.body.appendChild(div);
});

export async function getProducts() {
  let response = await fetch("http://localhost:8080/api/products");
  let results = await response.json();
  return results;
}

export async function getCategoryProducts(category) {
  let results = await getProducts();
  return results.filter((e) => e.category === category);
}

async function allCategoriesProducts() {
  const categoryProductsList = [];
  const categories = await getCategories();
  let newEntry = { category: null, products: null };

  for (const category of categories) {
    newEntry.category = category;
    newEntry.products = await getCategoryProducts(category.id);
    categoryProductsList.push(newEntry);

    // Memory management - free it
    newEntry = { category: null, products: null };
  }

  return categoryProductsList;
}
