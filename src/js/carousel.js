var carousel = document.getElementById('carousel')
var speed = 3000
var slides = 5
var indicators = ''
var switcher = ''

class OfferCarousel {
  /**
   * @function switchSlide
   * changes current slide
   * Reset all slides
   * If current slide is active & NOT equal to last slide then increment nextSlide
   * Remove all active states & hide
   * Set next slide as active & show the next slide
   */

  switchSlide = () => {
    let nextSlide = 0
    for (var i = 0; i < indicators.length; i++) {
      if (
        indicators[i].getAttribute('data-state') === 'active' &&
        i !== indicators.length - 1
      ) {
        nextSlide = i + 1
      }
      this.carouselHide(i)
    }
    this.carouselShow(nextSlide)
  }

  /**
   * @function carouselHide
   * @param {number} num - The index of the slide.
   * Hides the current slide in the view port
   */
  carouselHide = num => {
    indicators[num].setAttribute('data-state', '')
    slides[num].setAttribute('data-state', '')
    slides[num].style.opacity = 0
  }

  /**
   * @function carouselShow
   * @param {number} num - The index of the slide.
   * shows the next slide to the view port
   */
  carouselShow = num => {
    indicators[num].checked = true
    indicators[num].setAttribute('data-state', 'active')
    slides[num].setAttribute('data-state', 'active')
    slides[num].style.opacity = 1
  }

  /**
   * @function setSlide
   * @param {Object} slide  Accepts html markup for a slide
   * Reset all slides
   * Set defined slide as active
   * Stop the auto-switcher
   */

  setSlide = slide => {
    return () => {
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute('data-state', '')
        slides[i].setAttribute('data-state', '')
        this.carouselHide(i)
      }
      indicators[slide].setAttribute('data-state', 'active')
      slides[slide].setAttribute('data-state', 'active')
      this.carouselShow(slide)
      clearInterval(switcher)
    }
  }
}

const carouselSlider = new OfferCarousel()

/**
 * @function initSliderCarousel
 * check if carousel present in the dom
 * initiate the switch slide function
 */

const initSliderCarousel = () => {
  if (carousel) {
    slides = carousel.querySelectorAll('.slide')
    indicators = carousel.querySelectorAll('.indicator')
    switcher = setInterval(function() {
      carouselSlider.switchSlide()
    }, speed)
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener('click', carouselSlider.setSlide(i))
    }
    return true
  }
}
export { initSliderCarousel }
