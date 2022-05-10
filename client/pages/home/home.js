let curSlide = 0;
let maxSlide = 0;
function addListerToCarouselButtons() {
  const prevSlide = document.querySelector(".home__btn__prev");
  const nextSlide = document.querySelector(".home__btn__next");

  nextSlide.addEventListener("click", () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    renderBanner();
  });

  prevSlide.addEventListener("click", () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    renderBanner();
  });
}
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
async function renderBanner() {
  let banners = await fetchBannerData();
  console.log(curSlide);

  if (banners.length) {
    let bannersDOMElement = document.getElementById("banners");
    let enabledBanners = banners.filter((banner) => banner.isActive);
    maxSlide = enabledBanners.length;
    enabledBanners.forEach((banner, index) => {
      let slide = document.createElement("div");
      slide.className = "slide";
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;

      let slideImg = document.createElement("img");
      slideImg.src = `../../../${banner.bannerImageUrl}`;
      slideImg.alt = banner.bannerImageAlt;

      slide.appendChild(slideImg);

      bannersDOMElement.appendChild(slide);
    });
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
        cImage.style.height = "200px";
        cImage.style.width = "300px";
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
renderBanner(0);
renderCategories();
addListerToCarouselButtons();
