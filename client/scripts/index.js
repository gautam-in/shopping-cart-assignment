const API_URL = "https://sabka-bazar-sapient.herokuapp.com";

const bannerSection = $("#banners-box");
const prevButton = $("#prev-btn");
const nextButton = $("#next-btn");

let banners = [];
let currentImageIndex = 0;
let currentImageNode;



//***************************************  LOADING ALL BANNERS **********************************************//
async function loadBanners() {
  try {
    const res = await fetch(`${API_URL}/banners`);
    const data = await res.json();

    banners = data.banners;
    // Calling printBannersOnScreen with Banners data
    printBannersOnScreen(banners);
  } catch (err) {
    console.log(err);
  }
}



//***************************************  SHOWING BANNERS ON SCREEN **********************************************//
function printBannersOnScreen(banners) {
  if (banners) {
    $('.load').classList.replace('load', 'd-none');
  }
  for (let i = 0; i < banners.length; i++) {
    let banner = document.createElement("div");
    banner.setAttribute("class", "banner ");
    banner.setAttribute("id", banners[i].order);

    let bannerImage = document.createElement("img");

    bannerImage.src = banners[i].bannerImageUrl;
    bannerImage.alt = banners[i].bannerImageAlt;

    banner.hidden = true;

    banner.appendChild(bannerImage);

    bannerSection.appendChild(banner);
  }
  //   Showing Only First Banner Image
  showNextImage();
}


function showNextImage() {
  bannerImageSelection(currentImageIndex);
}



//***************************************  BANNERS AUTOMATICALLY MOVING **********************************************//
function bannerImageSelection(imageIndex) {
  if (currentImageNode) {
    currentImageNode.hidden = true;
  }
  if (imageIndex >= banners.length) {
    currentImageIndex = 0;
  }
  //   console.log(currentImageIndex);
  let newImg = document.getElementById(currentImageIndex + 1);
  if (newImg) {
    newImg.hidden = false;
    currentImageNode = newImg;
  }
  currentImageIndex++;

  setTimeout(() => {
    showNextImage();
  }, 2000);
}

// // On next button Select
// nextButton.addEventListener("click", () => {
//   showNextImage();
// });

// // On prev button Select
// prevButton.addEventListener("click", () => {
//   showPrevImage();
// });



//***************************************  LOAD CATEGORIES ***************************************************//
const categorieSection = $('#categories-section');
let allCategories = [];

async function loadCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);
    const categoriesJson = await res.json();
    allCategories = categoriesJson.categories;

    printCategoriesOnScreen(allCategories);
  } catch (err) {
    console.log(err);
  }
}



//***************************************  PRINTING CATEGORIES ON DOM  *************************************//
function printCategoriesOnScreen(categories) {
  for (let i = 0; i < categories.length; i++) {
    let itemCategory = document.createElement('div');
    itemCategory.setAttribute('class', 'category');

    // Category Image
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    image.src = categories[i].imageUrl;
    imageContainer.appendChild(image);

    let contentContainer = document.createElement('div');

    // Category Title
    let categoryTitle = document.createElement('h2');
    categoryTitle.innerText = categories[i].name;
    contentContainer.appendChild(categoryTitle);

    // Category Description
    let categoryPara = document.createElement('p');
    categoryPara.innerText = categories[i].description;
    contentContainer.appendChild(categoryPara);

    // Category Button
    let categoryButton = document.createElement('a');
    categoryButton.innerText = `Explore ${categories[i].key}`;
    contentContainer.appendChild(categoryButton);
    categoryButton.setAttribute('href', 'products.html');

    itemCategory.appendChild(imageContainer);
    itemCategory.appendChild(contentContainer);

    categorieSection.appendChild(itemCategory);
    categorieSection.appendChild(itemCategory);
    categorieSection.appendChild(itemCategory);
  }
}



//***************************************  HELPER FUNCTIONS  *******************************************//
// Selecting DOM Elements
function $(param) {
  const nodeList = document.querySelectorAll(param);
  if (nodeList.length == 1) {
    return nodeList[0];
  } else {
    return nodeList;
  }
}



//***************************************  ON LOAD  ****************************************************//
loadBanners();
loadCategories()
