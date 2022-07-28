import { globals } from "./globals";
import "./styles/main.scss";
import cart from "./cart"
import { getData, getCategories } from "./common";

document.addEventListener('DOMContentLoaded', (event) => {
    // slider
    const generateSlider = async () => {
        const home_slider = document.getElementById('home-slider');
        if (home_slider) {
            const banners = await getData(`${globals.API_URL}/api/banners`);
            if (banners.length > 0) {
                const template = require("./partials/slider.handlebars");
                home_slider.innerHTML = template({
                    banners,
                    server: globals.API_URL
                });
                const slides = document.querySelectorAll(".slider__slide");
                if (slides.length) {
                    slides.forEach((slide, indx) => {
                        slide.style.transform = `translateX(${indx * 100}%)`;
                    });
                    const nextSlide = document.querySelector(".btn-next");
                    let curSlide = 0;
                    let maxSlide = slides.length - 1;


                    nextSlide.addEventListener("click", function () {
                        if (curSlide === maxSlide) {
                            curSlide = 0;
                        } else {
                            curSlide++;
                        }
                        slides.forEach((slide, indx) => {
                            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
                        });
                    });

                    const prevSlide = document.querySelector(".btn-prev");

                    prevSlide.addEventListener("click", function () {
                        if (curSlide === 0) {
                            curSlide = maxSlide;
                        } else {
                            curSlide--;
                        }

                        slides.forEach((slide, indx) => {
                            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
                        });
                    });
                }
            }
        }
    }

    generateSlider();
    // slider

    // dropdown
    const dropbtns = document.querySelectorAll(".dropbtn");
    dropbtns.forEach(function (dropbtn) {
        dropbtn.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdown_content = this.closest(".dropdown").querySelector('.dropdown-content');
            dropdown_content.classList.toggle("show");
            if (this.getAttribute('aria-expanded') == 'false') {
                this.setAttribute('aria-expanded', 'true');
            } else {
                this.setAttribute('aria-expanded', 'false');
            }
            const id = this.getAttribute('id');
            if (id === 's-cart-btn') {
                document.body.classList.toggle("cart-open");
                if (document.body.classList.contains('cart-open')) {
                    const div = document.createElement('div');
                    div.setAttribute('id', 'overlay');
                    document.body.appendChild(div);
                } else {
                    document.getElementById("overlay").remove();
                }
            }
        });
    })

    const cart_close = document.querySelector(".cart_area__close");
    cart_close.addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById('s-cart-btn').click();
    });

    // home category
    const generatecategories = async () => {
        const home_category = document.getElementById('home-category');
        if (home_category) {
            const categories = await getCategories();
            if (categories.length > 0) {
                const template = require("./partials/categories.handlebars");
                home_category.innerHTML = template({
                    categories,
                    server: globals.API_URL
                });
            }
        }
    }

    generatecategories();
    // home category

    // product category
    const generateProductPageCategories = async () => {
        const product_page_category = document.getElementById('product-page-category');
        if (product_page_category) {
            const categories = await getCategories();
            if (categories.length > 0) {
                const template = require("./partials/p_categories.handlebars");
                product_page_category.innerHTML = template({
                    categories,
                });
            }
        }
    }

    generateProductPageCategories();
    // home category


    cart();
});