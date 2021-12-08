/* Carousel starts */
var carouselImages;
var dotNode;
var currentIndex = 0;

function CarouselData() {
  return fetch("./../server/banners/index.get.json").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong !");
    }
  });
}

async function DisplayCarouselData() {
  let allCarouselData = await CarouselData();
  for (let i = 0; i < allCarouselData.length; i++) {
    createCarousel(allCarouselData[i]);
    let newDot = document.createElement("li");

    newDot.className = "fa fa-circle";
    newDot.setAttribute("onclick", "dotClick(this.id)");
    newDot.setAttribute("id", parseInt(i));

    let dotContainer = document.querySelector(".dotList");
    dotContainer.appendChild(newDot);
  }
  carouselImages = document.getElementsByClassName("offersImg");
  dotNode = document.getElementsByClassName("fa fa-circle");

  // Disaply images and dots initially
  displayImageAndDots();
  automaticMotion();
}

function createCarousel(carouselData) {
  let carousel = document.querySelector(".carousel");
  let carouselImage = document.createElement("img");

  carouselImage.setAttribute("src", carouselData.bannerImageUrl);
  carouselImage.setAttribute("alt", carouselData.bannerImageAlt);
  carouselImage.setAttribute("class", "offersImg");

  carousel.appendChild(carouselImage);
}

window.addEventListener("DOMContentLoaded", DisplayCarouselData);

// Dispaly carousel images and dots
function displayImageAndDots() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
    dotNode[j].style.color = "grey";
  }
  carouselImages[currentIndex].style.display = "block";
  dotNode[currentIndex].style.color = "black";
}

// Click on carousel dots
function dotClick(c) {
  currentIndex = Number(c);
  displayImageAndDots();
}

// Automatic motion of carousel
function automaticMotion() {
  const interval = setInterval(() => {
    if (currentIndex < carouselImages.length - 1) {
      dotClick(currentIndex + 1);
    } else {
      dotClick(0);
    }
  }, 5000);
}

/* Carousel ends */

function FetchProducts() {
  return fetch("./../server/categories/index.get.json").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong !");
    }
  });
}
async function DisplayProducts() {
  let allProducts = await FetchProducts();
  for (let i = 0; i < allProducts.length; i++) {
    if (i % 2 == 0) {
      ProductsRightCardItem(allProducts[i]);
    } else {
      ProductsLeftCardItem(allProducts[i]);
    }
  }
}

window.addEventListener("DOMContentLoaded", DisplayProducts);

function ProductsLeftCardItem(product) {
  let productItem = document.createElement("article");
  productItem.setAttribute("class", "categoriesComponent shadowEffect");

  let productCard = document.createElement("div");
  productCard.setAttribute("class", "imagePosition");

  let productImage = document.createElement("img");
  productImage.setAttribute("src", product.imageUrl);
  productImage.setAttribute("alt", product.name);
  productImage.setAttribute("class", "categoryImages");

  productCard.append(productImage);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "categoriesComponentRight");

  let cardHeading = document.createElement("h2");
  cardHeading.innerHTML = product.name;

  let cardDetails = document.createElement("p");
  cardDetails.innerHTML = product.description;

  let cardButton = document.createElement("button");
  cardButton.setAttribute("type", "button");
  cardButton.setAttribute("class", "btn btn-primary");
  cardButton.innerHTML = product.key;

  cardBody.append(cardHeading);
  cardBody.append(cardDetails);
  cardBody.append(cardButton);
  productItem.append(productCard);
  productItem.append(cardBody);

  let parentElement = document.querySelector("#carousel-wrapper");
  insertAfter(parentElement, productItem);
}

function ProductsRightCardItem(product) {
  let productItem = document.createElement("article");
  productItem.setAttribute("class", "categoriesComponent shadowEffect");

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "categoriesComponentRight");

  let cardHeading = document.createElement("h2");
  cardHeading.innerHTML = product.name;

  let cardDetails = document.createElement("p");
  cardDetails.innerHTML = product.description;

  let cardButton = document.createElement("button");
  cardButton.setAttribute("type", "button");
  cardButton.setAttribute("class", "btn btn-primary");
  cardButton.innerHTML = product.key;

  let productCard = document.createElement("div");
  productCard.setAttribute("class", "imagePosition");

  let productImage = document.createElement("img");
  productImage.setAttribute("src", product.imageUrl);
  productImage.setAttribute("alt", product.name);
  productImage.setAttribute("class", "categoryImages");

  productCard.append(productImage);

  cardBody.append(cardHeading);
  cardBody.append(cardDetails);
  cardBody.append(cardButton);
  productItem.append(cardBody);
  productItem.append(productCard);

  let parentElement = document.querySelector("#carousel-wrapper");
  insertAfter(parentElement, productItem);
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// var el = document.createElement("span");
// el.innerHTML = "test";
// var div = document.getElementById("foo");
// insertAfter(div, el);
