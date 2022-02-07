import { fetchData } from "./utils.js";

// const data = [
//     {
//       "bannerImageUrl": "/static/images/offers/offer1.jpg",
//       "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
//       "isActive": true,
//       "order": 1,
//       "id": "5b6c38156cb7d770b7010ccc"
//     },
//     {
//       "bannerImageUrl": "/static/images/offers/offer2.jpg",
//       "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
//       "isActive": true,
//       "order": 2,
//       "id": "5b6c38336cb7d770b7010ccd"
//     },
//     {
//       "bannerImageUrl": "/static/images/offers/offer3.jpg",
//       "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
//       "isActive": true,
//       "order": 3,
//       "id": "5b6c38456cb7d770b7010cce"
//     },
//     {
//       "bannerImageUrl": "/static/images/offers/offer4.jpg",
//       "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
//       "isActive": true,
//       "order": 4,
//       "id": "5b6c38576cb7d770b7010ccf"
//     },
//     {
//       "bannerImageUrl": "/static/images/offers/offer5.jpg",
//       "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
//       "isActive": true,
//       "order": 5,
//       "id": "5b6c386b6cb7d770b7010cd0"
//     }
//   ]
export default class Carousal extends HTMLElement{
    constructor(){
        super();
    }

    async connectedCallback(){
        this.innerHTML = `
        <section class='carousal'>
        <figure class='img-container'>
        </figure>
        <section class="dots-container">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </section>
        <section class="carousal-controls">
            <div class="controls prev">Prev</div>
            <div class="controls next">Next</div>
        </section>
        </section>
        `;
        
        const img_container = document.querySelector('.img-container');
        const banners = await fetchData('http://localhost:5000/banners');
        banners.forEach(image => {
            const img = document.createElement('img');
            img.classList.add('carousal-img');
            img.setAttribute('src', '../../' + image.bannerImageUrl);
            img.setAttribute('alt', image.bannerImageAlt);
            img_container.appendChild(img);
        })
        let slides = document.querySelectorAll('.carousal-img');
        slides[0].classList.add('visible');
        const totalSlides = slides.length;
        let currentSlide = 0;

        document.querySelector('.next').addEventListener('click', showNextSlide);
        document.querySelector('.prev').addEventListener('click', showPrevSlide);

        const dotsContainer = document.querySelector('.dots-container');
        //attaching event to parent of dots
        dotsContainer.addEventListener('click', event => showDotSlide(event));
        let dots = dotsContainer.children;
        

        function showNextSlide(){
            Array.from(slides).forEach(slide => {
                slide.classList.remove('visible');
            })
            Array.from(dots).forEach(dot => {
                dot.classList.remove('active');
            })
            if(currentSlide !== totalSlides-1)
                currentSlide++;
            else
                currentSlide = 0;
            slides[currentSlide].classList.add('visible');
            dots[currentSlide].classList.add('active');
        }

        function showPrevSlide(){
            Array.from(slides).forEach(slide => {
                slide.classList.remove('visible');
            })
            Array.from(dots).forEach(dot => {
                dot.classList.remove('active');
            })
            if(currentSlide !== 0)
                currentSlide--;
            else
                currentSlide = totalSlides-1;
            slides[currentSlide].classList.add('visible');
            dots[currentSlide].classList.add('active');
        }

        function showDotSlide(event){
            let index
            Array.from(dots).forEach(dot => {
                dot.classList.remove('active');
            })
            event.target.classList.add('active')
            Array.from(dots).forEach((dot, ind) => {
                if(Array.from(dot.classList).includes('active'))
                    index = ind;
            })
            if(!(index === undefined)){
                Array.from(slides).forEach(slide => {
                    slide.classList.remove('visible');
                })
                Array.from(slides).forEach((slide, ind) => {
                    if(ind === index)
                        slide.classList.add('visible');
                })
            }
            
        }
    }
}