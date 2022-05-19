import './index.scss'
import {url} from '../utils'

let slideIndex = 1;
setTimeout(() => showSlides(slideIndex), 100)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__list__slide");
  let dots = document.getElementsByClassName("carousel__control__bottomlinks");
  console.log(dots);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

async function buildSliders(){
    try {
        await fetch(url+'banners').then(async function (response) {
            await response.json().then(async function (banners) {
                const carousel__list = document.createElement("ol")
                carousel__list.classList.add("carousel__list")
                const carousel__control = document.createElement("div")
                carousel__control.classList.add("carousel__control")
                for (let i = 0; i <banners.length; i++){
                    const carousel__list__slide = document.createElement("li")
                    carousel__list__slide.classList.add("carousel__list__slide")

                    const carousel__list__slide_image = document.createElement("img")
                    carousel__list__slide_image.classList.add("carousel__list__slide_image")
                    carousel__list__slide_image.src = banners[i].bannerImageUrl
                    carousel__list__slide_image.alt = banners[i].bannerImageAlt

                    carousel__list__slide.appendChild(carousel__list__slide_image)
                    carousel__list.appendChild(carousel__list__slide)

                    const carousel__control__bottomlinks = document.createElement("a")
                    carousel__control__bottomlinks.classList.add("carousel__control__bottomlinks")
                    carousel__control__bottomlinks.href = "#"
                    carousel__control__bottomlinks.title = "Go to slide " + i;
                    // carousel__control__bottomlinks.innerHTML = i;
                    carousel__control__bottomlinks.onclick = () => currentSlide(i)
                    carousel__control.appendChild(carousel__control__bottomlinks);
                }
                document.getElementById('carousel').appendChild(carousel__list);
                document.getElementById('carousel').appendChild(carousel__control);
            })
        })
        
    } catch (error) {
        console.error(error);
    }
}
export default function slider(){
    buildSliders();
    return `<section class="carousel" id="carousel"></section>`
}