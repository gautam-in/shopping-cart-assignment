const template = require("./templates/main.handlebars");
import logo from "../static/images/logo.png";

document.addEventListener("DOMContentLoaded", async function () {
  const div = document.createElement("div");
  const categories = await getCategories();
  div.innerHTML = template({
    logo: logo,
    categories: categories,
  });

  document.body.appendChild(div);
});

export async function getCategories() {
  let response = await fetch("http://localhost:8080/api/categories");
  let results = await response.json();
  return results.filter((e) => e.enabled).sort((a, b) => a.order - b.order);
}
