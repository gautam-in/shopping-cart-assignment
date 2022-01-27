const data = [
    {
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 1,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer2.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
      "isActive": true,
      "order": 2,
      "id": "5b6c38336cb7d770b7010ccd"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 3,
      "id": "5b6c38456cb7d770b7010cce"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer4.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
      "isActive": true,
      "order": 4,
      "id": "5b6c38576cb7d770b7010ccf"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer5.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
      "isActive": true,
      "order": 5,
      "id": "5b6c386b6cb7d770b7010cd0"
    }
  ]
class Carousal extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <style>
        .carousal{
            position : relative;
            top : 5px;
            z-index : -1;
        } 
        .carousal-img{
            display : none;
            max-width : 100%;
            height : auto;
        }
        .visible {
            display : block;
        }
        .dots-container {
            position : absolute;
            top : 100%;
            left : 50%;
            transform : translate(-50%, -50%);
        }
        .dot {
            background-color: #eee;
            border: 1px solid #666;
            border-radius: 5px;
            box-shadow: inset 1px 1px 1px #888;
            display: inline-block;
            height: 5px;
            width: 5px;
            margin: 0 5px;
        }
        .dot:hover {
            cursor : pointer;
        }
        .dot.active {
            background-color: black;
            box-shadow: inset 2px 0px 2px -2px #333;
        }
        .carousal-controls {
            display : flex;
            justify-content : space-between;
            position : absolute;
            top : 50%;
            transform : translateY(-50%);
            width : 100%;
        }
        .controls {
            border : 1px solid black;
            color : white;
            background-color : black;
            padding : 4px;
            opacity : 0.2;
        }
        .controls:hover {
            cursor : pointer;
        }
        @media only screen and (min-width: 600px) {
            .carousal {
                max-width : 1000px;
                margin : 0 auto;
            }
        }
        </style>
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
        <div>
        </div>
        </section>
        `;
        const img_container = document.querySelector('.img-container');
        data.forEach(image => {
            const img = document.createElement('img');
            img.classList.add('carousal-img');
            img.setAttribute('src', '../..' + image.bannerImageUrl);
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

customElements.define('custom-carousal', Carousal)