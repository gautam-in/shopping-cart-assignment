const BASE_URL = "http://localhost:5100";
const mainWrapper = document.getElementById("mainWrapper");
const offersCarousel = document.getElementById("offersCarousel");
const innerCarousel =
  offersCarousel.getElementsByClassName("carousel-inner")[0];
const setAttributes = (element, attributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};

function attachOfferBannersToDom(offers) {
  const carouselItems = document.createDocumentFragment();

  offers.map((offer) => {
    let carouselItem = document.createElement("div");
    let carouselImage = document.createElement("img");
    const carouselItemAttributes = {
      class: `carousel-item ${offer.isActive ? "active" : ""}`,
    };
    const carouselImageAttributes = {
      src: offer.bannerImageUrl,
      alt: offer.bannerImageAlt,
      class: "d-block w-100",
    };

    setAttributes(carouselItem, carouselItemAttributes);
    setAttributes(carouselImage, carouselImageAttributes);
    carouselItem.appendChild(carouselImage);
    carouselItems.appendChild(carouselItem);
  });

  innerCarousel.appendChild(carouselItems);
}

function attachShoppingCategoriesToDom(categories) {
  const shoppingCategories = document.createDocumentFragment();
  const filteredCategories = categories.filter((category) => category.enabled);

  filteredCategories.map((category, index) => {
    let shoppingCategorySection = document.createElement("section");
    let containerDiv = document.createElement("div");
    let categoryImage = document.createElement("img");
    let shoppingCategoryContent = document.createElement("div");
    let heading = document.createElement("h4");
    let headingTextNode = document.createTextNode(category.name);
    let paragraph = document.createElement("p");
    let paragraphTextNode = document.createTextNode(category.description);
    let button = document.createElement("a");
    let buttonTextNode = document.createTextNode(`Explore ${category.key}`);
    const shoppingCategoryAttributes = {
      class: `${
        index !== filteredCategories.length - 1
          ? "shadow shopping-category-section"
          : "shopping-category-section"
      }`,
    };
    const containerDivAttributes = {
      class: "container d-flex justify-content-between align-items-center py-4",
    };
    const shoppingCategoryContentAttributes = {
      class: "d-flex flex-column align-items-center shopping-category-content",
    };
    const categoryImageAttributes = {
      src: category.imageUrl,
      alt: category.name,
    };
    const buttonAttributes = {
      class: "btn btn-danger shopping-category-btn",
      role: "button",
      href: "./products.html",
    };

    setAttributes(shoppingCategorySection, shoppingCategoryAttributes);
    setAttributes(containerDiv, containerDivAttributes);
    setAttributes(categoryImage, categoryImageAttributes);
    setAttributes(shoppingCategoryContent, shoppingCategoryContentAttributes);
    setAttributes(button, buttonAttributes);

    heading.appendChild(headingTextNode);
    paragraph.appendChild(paragraphTextNode);
    button.appendChild(buttonTextNode);
    shoppingCategorySection.appendChild(containerDiv);
    containerDiv.appendChild(categoryImage);
    containerDiv.appendChild(shoppingCategoryContent);
    shoppingCategoryContent.appendChild(heading);
    shoppingCategoryContent.appendChild(paragraph);
    shoppingCategoryContent.appendChild(button);
    shoppingCategories.appendChild(shoppingCategorySection);
  });

  mainWrapper.appendChild(shoppingCategories);
}

function fetchData(apiEndPoint) {
  fetch(`${BASE_URL}/${apiEndPoint}`)
    .then((response) => response.json())
    .then((data) => {
      if (apiEndPoint === "banners") {
        attachOfferBannersToDom(data);
      } else if (apiEndPoint === "categories") {
        attachShoppingCategoriesToDom(data);
      }
    });
}

function onLoad() {
  fetchData("banners");
  fetchData("categories");
}
