window.addEventListener("DOMContentLoaded", displayCategories);

async function getCategories() {
  try {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function displayCategories() {
  let categories = await getCategories();

  categoryList(categories);
}

function categoryList(categoriesArr) {
  const categories = categoriesArr.sort((a, b) => (a.order > b.order ? 1 : -1));

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].enabled) {
      let cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "categoryContainer");

      let imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", "imgContainer");

      let img = document.createElement("img");
      img.setAttribute("src", categories[i].imageUrl);
      img.setAttribute("class", "categoryImage");
      img.setAttribute("alt",categories[i].name);

      imageContainer.append(img);

      let descContainer = document.createElement("div");
      descContainer.setAttribute("class", "desc");

      let categoryName = document.createElement("h4");
      categoryName.setAttribute("class", "desc h4");
      categoryName.innerHTML = categories[i].name;

      let categoryDesc = document.createElement("span");
      categoryDesc.setAttribute("class", "categoryDescription");
      categoryDesc.innerHTML = categories[i].description;

      let categoryButton = document.createElement("button");
      categoryButton.setAttribute("class", "categoryButton");
      categoryButton.setAttribute("id", categories[i].id);
      categoryButton.innerHTML = `Explore ${categories[i].key}`;

      descContainer.append(categoryName);
      descContainer.append(categoryDesc);
      descContainer.append(categoryButton);

      if (i % 2 === 0) {
        cardContainer.append(descContainer);
        cardContainer.append(imageContainer);
      } else {
        cardContainer.append(imageContainer);
        cardContainer.append(descContainer);
      }

      document.querySelector("#categoriesList").appendChild(cardContainer);
    }
  }
}

async function getCategoryProducts(e) {
  if (e.target && e.target.nodeName == "BUTTON") {
    window.location.href = "./productList.html";
    document.getElementById(e.target.id).click();
  }
}

document
  .getElementById("categoriesList")
  .addEventListener("click", getCategoryProducts);
