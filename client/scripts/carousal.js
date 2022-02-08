import { fetchData } from "./utils.js";

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