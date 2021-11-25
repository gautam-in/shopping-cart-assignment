import { HomeService } from "../services/homeService.js";

export class Carousel {

    constructor() {
        this.currentIndex = 0;
        this.isHovered = false;
        this.homeService = new HomeService();
    }

    showBanners() {
        this.homeService.getAllBanners().then(
            bannerList => {
                const bannerElement = document.getElementsByClassName('sb-carousel-list')[0];
                const dotsContainer = document.getElementsByClassName("sb-carousel-dots-container")[0];
                for (let index = 0; index < bannerList.length; index++) {
                    const banner = bannerList[index];
                    const carouselItem = document.createElement('li');
                    carouselItem.classList.add("sb-carousel-item");
                    const shadow = document.createElement('div');
                    shadow.classList.add("shadow");

                    const img = document.createElement('img');
                    img.src = banner.bannerImageUrl;

                    carouselItem.appendChild(img);
                    carouselItem.appendChild(shadow);
                    bannerElement.appendChild(carouselItem);

                    const dotItem = document.createElement("div");
                    dotItem.classList.add("dot-item");

                    dotsContainer.appendChild(dotItem);
                }
                this.showNextOrPreviousBanner(0);
                setInterval(() => {
                    /* if (!this.isHovered)
                        this.showNextOrPreviousBanner(1); */
                }, 3000);

                this.addCarouselMouseEvents();
                this.addNextPreviousBtnEvents();
            }
        )
            .catch(error => {
                const merrorElement = document.getElementsByClassName('banners-error')[0];
                merrorElement.innerHTML = "No data fouind";
            });
    }

    addCarouselMouseEvents() {
        const carouselContainer = document.getElementsByClassName("sb-carousel-container")[0];
        carouselContainer.addEventListener('mouseenter', event => {
            this.isHovered = true;
            event.stopPropagation();
        })
        carouselContainer.addEventListener('mouseleave', event => {
            this.isHovered = false;
            event.stopPropagation();
        })
    }

    addNextPreviousBtnEvents() {
        let perviousButton = document.getElementsByClassName("sb-carousel-btn-left")[0];
        perviousButton.addEventListener('click', event => {
            this.showNextOrPreviousBanner(-1);
            event.stopPropagation();
        });

        let nextButton = document.getElementsByClassName("sb-carousel-btn-right")[0];
        nextButton.addEventListener('click', event => {
            this.showNextOrPreviousBanner(1);
            event.stopPropagation();
        });
    }

    showNextOrPreviousBanner(num) {
        let carouselList = document.getElementsByClassName("sb-carousel-item");
        let currentListItem = carouselList[this.currentIndex];
        if (currentListItem) {
            currentListItem.style.display = "none";
        }

        let dotList = document.getElementsByClassName("dot-item");
        dotList[this.currentIndex].classList.remove("dot-active");

        this.currentIndex += num;
        if (this.currentIndex >= carouselList.length) this.currentIndex = 0;
        if (this.currentIndex < 0) this.currentIndex = carouselList.length - 1;

        carouselList[this.currentIndex].style.display = "block";
        dotList[this.currentIndex].classList.add("dot-active");
    }
}

const carousel = new Carousel();
carousel.showBanners();