import { getCategories } from "./modules/categories";

function displayCategories(categories) {
  let theList = document.querySelector(".categories");
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
    newInfoAnchor.setAttribute("href", `/category/${category.id}`);
    newInfoAnchor.innerText = `Explore ${category.key}`;

    newWrapperInfo.appendChild(newInfoH2);
    newWrapperInfo.appendChild(newInfoParagraph);
    newWrapperInfo.appendChild(newInfoAnchor);

    newLi.appendChild(newWrapperImage);
    newLi.appendChild(newWrapperInfo);

    theList.appendChild(newLi);
  }
}

async function allCategories() {
  let allCategories = await getCategories();
  displayCategories(allCategories);
}

document.addEventListener("DOMContentLoaded", allCategories());
