async function fetchBannerData() {
  try {
    let response = await fetch("http://localhost:5000/banners");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return new Error("Error while fetching banner data");
  }
}
async function fetchCategories() {
  try {
    let response = await fetch("http://localhost:5000/categories");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return new Error("Error while fetching categories");
  }
}

async function renderCategories() {
  let categories = await fetchCategories();
  if (categories.length) {
    let categoriesDOMElement = document.getElementById("categories");
    categories
      .filter((category) => category.enabled)
      .forEach((category) => {
        let categoryContainer = document.createElement("div");
        categoryContainer.className = "home__category";

        // category image
        let cImage = document.createElement("img");
        cImage.src = `../../..${category.imageUrl}`;
        cImage.style.height = "150px";
        cImage.style.width = "250px";
        cImage.alt = category.key;
        // category data
        let cArticle = document.createElement("article");
        cArticle.className = "home__category__data";

        let cHeading = document.createElement("H1");
        cHeading.innerText = category.name;

        let cpara = document.createElement("p");
        cpara.innerText = category.description;

        let cButton = document.createElement("button");
        cButton.innerText = `Explore ${category.name}`;
        cButton.addEventListener("click", () => {
          window.location.href = `../products/products.html?category=${category.id}`;
        });

        cArticle.appendChild(cHeading);
        cArticle.appendChild(cpara);
        cArticle.appendChild(cButton);

        categoryContainer.appendChild(cImage);
        categoryContainer.appendChild(cArticle);

        categoriesDOMElement.appendChild(categoryContainer);
      });
  }
}

renderCategories();
