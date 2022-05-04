//variable declarations
let bannerItems = "";
let productItems = "";

//returns all the banners
async function bannersData() {
  try {
    let response = await fetch("http://localhost:5000/banners");
    let banners = await response.json(); // ok
    displayBannerItems(banners);
  } catch (error) {
    console.log(error);
  }
}

function displayBannerItems(banners) {
  for (let i = 0; i < banners.length; i++) {
    if (i === 0) {
      fillCrousalActiveElement(banners[0]);
    } else {
      fillCrousalElements(banners[i]);
    }
  }
}

function fillCrousalActiveElement(banners) {
  bannerItems += `<div class="item active offers">
    <img
    src="../../..${banners.bannerImageUrl}"
    alt="${banners.bannerImageAlt}"
    width=1200
    height=300
    
  />
  </div>`;
  document.querySelector(".carousel-inner").innerHTML = bannerItems;
}
function fillCrousalElements(banners) {
  bannerItems += `<div class="item offers">
    <img
    src="../../..${banners.bannerImageUrl}"
    alt="${banners.bannerImageAlt}"
    width=1200
    height=300
  />
  </div>`;
  document.querySelector(".carousel-inner").innerHTML = bannerItems;
}

//returns all the categories
async function productsData() {
  try {
    let response = await fetch("http://localhost:5000/categories");
    let categories = await response.json(); // ok
    displayCategoriesItems(categories);
  } catch (error) {
    console.log(error);
  }
}

function displayCategoriesItems(categories) {
  let enabledCategories = [];
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].enabled) {
      enabledCategories.push(categories[i]);
    }
  }

  for (let i = 0; i < enabledCategories.length; i++) {
    fillCategoriesActiveElement(enabledCategories[i]);
  }
}

function fillCategoriesActiveElement(categories) {
  if (categories.order % 2 === 0) {
    productItems += `<div style="order: ${categories.order}">
      <ul class="product_home">
        <li><strong>${categories.name}</strong></li>
        <li>${categories.description}</li>
        <li><button><a href="./products.html">Explore ${categories.key}</a></button></li>
      </ul>
      <img
        width="400"
        height="400"
        class="prodcutsImages"
        src="../../..${categories.imageUrl}"
        alt="${categories.description}"
        loading="lazy"
      /></div>`;
  } else {
    productItems += `<div style="order: ${categories.order}"><img
        width="400"
        height="400"
        class="prodcutsImages"
        src="../../..${categories.imageUrl}"
        alt="${categories.description}"
        loading="lazy"
      />
      <ul class="product_home">
        <li><strong>${categories.name}</strong></li>
        <li>${categories.description}</li>
        <li><button><a href="./products.html">Explore ${categories.key}</a></button></li>
      </ul></div>`;
  }

  document.querySelector(".productsCategory").innerHTML = productItems;
}

window.addEventListener("DOMContentLoaded", () => {
  bannersData();
  productsData();
});
