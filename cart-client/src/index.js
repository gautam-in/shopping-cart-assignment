import "./styles/main.scss";
import cart from "./cart"
// const mainTemplate = require("./book-listing.handlebars");

document.addEventListener('DOMContentLoaded', (event) => {
    // const div = document.createElement("div");
    // div.innerHTML = mainTemplate({
    //     username: "test",
    //     info: "Your books are due next Tuesday",
    //     books: [
    //         { title: "A book", synopsis: "With a description" },
    //         { title: "Another book", synopsis: "From a very good author" },
    //         { title: "Book without synopsis" },
    //     ],
    // });

    // setTimeout(() => {
    //     document.getElementById('output').appendChild(div);
    // }, 5000);

    // dropdown
    const dropbtns = document.querySelectorAll(".dropbtn");
    dropbtns.forEach(function (dropbtn) {
        dropbtn.addEventListener("click", function (event) {
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

    // slider
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

    cart();
});