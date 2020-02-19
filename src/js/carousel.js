var carousel = document.getElementById('carousel')
var speed = 3000
var slides = 5
var indicators = ''
var switcher = ''

class OfferCarousel {
  constructor () { }

  switchSlide = () => {
    var nextSlide = 0
    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
      // If current slide is active & NOT equal to last slide then increment nextSlide
      if ((indicators[i].getAttribute('data-state') === 'active') && (i !== (indicators.length-1))) {
        nextSlide = i + 1
      }
      // Remove all active states & hide
      this.carouselHide(i)
    }
    // Set next slide as active & show the next slide
    this.carouselShow(nextSlide)
  }

  carouselHide  = (num) => {
    indicators[num].setAttribute('data-state', '')
    slides[num].setAttribute('data-state', '')
    slides[num].style.opacity = 0
  }

  carouselShow = (num) => {
    indicators[num].checked = true
    indicators[num].setAttribute('data-state', 'active')
    slides[num].setAttribute('data-state', 'active')
    slides[num].style.opacity = 1
  }

  setSlide = (slide) => {
    return () => {
      // Reset all slides
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute('data-state', '')
        slides[i].setAttribute('data-state', '')
        this.carouselHide(i)
      }
      // Set defined slide as active
      indicators[slide].setAttribute('data-state', 'active')
      slides[slide].setAttribute('data-state', 'active')
      this.carouselShow(slide)
      // Stop the auto-switcher
      clearInterval(switcher)
    }
  }
}

const carouselSlider = new OfferCarousel()
const initSliderCarousel = () => {
  if (carousel) {
    slides = carousel.querySelectorAll('.slide')
    indicators = carousel.querySelectorAll('.indicator')
    switcher = setInterval(function () {
      carouselSlider.switchSlide()
    }, speed)
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener('click', carouselSlider.setSlide(i))
    }
    return true
  }
}
export  { initSliderCarousel }
