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
      img.setAttribute("class","categoryImage");

      imageContainer.append(img);

      let descContainer = document.createElement("div");
      descContainer.setAttribute("class", "desc");

      let categoryName = document.createElement("h4");
      categoryName.setAttribute("class", "desc h4");
      categoryName.innerHTML = categories[i].name;

      let categoryDesc = document.createElement("h6");
      categoryDesc.setAttribute("class","categoryDescription")
      categoryDesc.innerHTML = categories[i].description;

      let categoryButton = document.createElement("button");
      categoryButton.setAttribute("class", "categoryButton");

      let buttonName = document.createElement("span");
      buttonName.setAttribute("class", "categoryButton span");
      buttonName.innerHTML = `Explore ${categories[i].key}`;

      categoryButton.append(buttonName);
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
