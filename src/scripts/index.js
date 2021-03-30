import "regenerator-runtime/runtime";
import { getCategoriesData, getBannersData } from "../services/getData.js";
import Carousel from 'bootstrap/js/dist/carousel';

var carousel;
document.addEventListener('DOMContentLoaded', () => {
    getBannersData().then((data) => {
        const carouselEl = document.getElementById('carouselBanner')
        carousel = new Carousel(carouselEl);
        carousel.opt
        renderCarousel(data);
    }).catch(err => console.log(err));

    getCategoriesData().then((data) => {
        renderCategories(data);
    })

    const categories = document.querySelector('.categories');
    categories.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            sessionStorage.setItem('categorySelected', button.id);
            window.location = 'products.html';
        }
    });
})

function renderCarousel(data) {
    let activeClassAdded = false;
    const carousel = document.querySelector('.carousel-inner');
    data.forEach(banner => {
        if (banner.isActive) {
            const div = document.createElement('div');
            div.classList.add('carousel-item');
            if (!activeClassAdded) {
                div.classList.add('active');
                activeClassAdded = true;
            }
            const img = document.createElement('img');
            img.src = `..${banner.bannerImageUrl}`;
            img.id = banner.id;
            img.alt = banner.bannerImageAlt;

            div.appendChild(img);
            carousel.appendChild(div);
        }
    });
    document.querySelector(".carousel-control-prev").addEventListener('click', () => carouselClick('prev'));
    document.querySelector(".carousel-control-next").addEventListener('click', () => carouselClick('next'));
}

function carouselClick(direction) {
    if (direction === 'prev') {
        carousel.prev();
    } else {
        carousel.next();
    }

}

function renderCategories(data) {
    const categories = document.querySelector(".categories");
    let imageFirst = true;
    data.sort((a, b) => a.order - b.order);
    data.forEach(category => {
        if (category.enabled) {
            const divMain = document.createElement('div')
            divMain.classList.add("d-flex");
            divMain.classList.add("align-items-start");
            const img = document.createElement('img');
            img.src = category.imageUrl;
            img.width = "200";
            img.height = "200";


            const infoDiv = document.createElement("div");
            infoDiv.classList.add("d-flex");
            infoDiv.classList.add("flex-column");
            infoDiv.classList.add("m-2");
            infoDiv.classList.add("align-items-center");
            infoDiv.classList.add("flex-grow-1");

            const heading = document.createElement("h3");
            heading.textContent = category.name;

            const descriptionPara = document.createElement("p");
            descriptionPara.textContent = category.description;

            const button = document.createElement("button");
            button.id = category.id;
            button.textContent = `Explore ${category.key}`
            button.classList.add("btn");
            button.classList.add("btn-pink");
            button.classList.add("w-50");
            button.classList.add("align-self-center");

            infoDiv.appendChild(heading);
            infoDiv.appendChild(descriptionPara);
            infoDiv.appendChild(button);

            if (imageFirst) {
                divMain.appendChild(img);
                divMain.appendChild(infoDiv);
            } else {
                divMain.appendChild(infoDiv);
                divMain.appendChild(img);
                imageFirst = false;
            }
            imageFirst = !imageFirst;
            categories.appendChild(divMain);
        }
    })
}

