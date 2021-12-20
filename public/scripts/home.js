import { API_PATH } from './constants.js';

const categoryContainer = document.querySelector(".categories-container");
const  carouselBlock = document.querySelector(".carousel-inner");


 function loadData () {
  loadBanners();
  loadCategories();  
}

async function loadBanners() {
    const response  = await fetch(API_PATH.bannersUrl);
    const data = await response.json();
    const carouselItems  = data.filter(banner => banner.isActive)
      .map((banner,index) => {
         return `<div class="${index === 0?'carousel-item active': 'carousel-item'}">
         <img class="d-block w-100" src="${banner.bannerImageUrl}" alt="${banner.bannerImageAlt}">
       </div>`

       });
       carouselBlock.innerHTML = carouselItems.join('');
}

async function loadCategories() {
    const response  = await fetch(API_PATH.categoriesUrl);
    const data = await response.json();

    categoryContainer.innerHTML = data.filter(category => category.enabled).map((category,index) => {
        return `
           <div class="row category ${index%2 !== 0 ? 'flex-row-reverse': ''}"> 
            <div class="col-4 img-conatiner">
                    <img class="img-fluid" src="${category.imageUrl}" alt="${category.name}">
                </div>
                <div class=" col-8 category-details">
                    <h2>${category.name}</h2>
                    <p>${category.description}}</p>
                    <button class="btn btnCrimsonPink" type="button"
                        aria-label="Click here to explore ${category.key}">Explore
                        ${category.key}</button>
                </div>
            </div>    `
    }).join('');
}


document.addEventListener('DOMContentLoaded',loadData);