import Banners from './banners'
import Products from './products'
import Cart from './cart-handler'

if (module.hot) {
  module.hot.accept()
}

var carousel = document.getElementById('carousel')
var slides = 5
var speed = 3000

function carouselHide (num) {
  indicators[num].setAttribute('data-state', '')
  slides[num].setAttribute('data-state', '')

  slides[num].style.opacity = 0
}

function carouselShow (num) {
  indicators[num].checked = true
  indicators[num].setAttribute('data-state', 'active')
  slides[num].setAttribute('data-state', 'active')

  slides[num].style.opacity = 1
}

function setSlide (slide) {
  return function () {
    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].setAttribute('data-state', '')
      slides[i].setAttribute('data-state', '')

      carouselHide(i)
    }

    // Set defined slide as active
    indicators[slide].setAttribute('data-state', 'active')
    slides[slide].setAttribute('data-state', 'active')
    carouselShow(slide)

    // Stop the auto-switcher
    clearInterval(switcher)
  }
}

function switchSlide () {
  var nextSlide = 0
  // Reset all slides
  for (var i = 0; i < indicators.length; i++) {
    // If current slide is active & NOT equal to last slide then increment nextSlide
    if ((indicators[i].getAttribute('data-state') === 'active') && (i !== (indicators.length-1))) {
      nextSlide = i + 1
    }

    // Remove all active states & hide
    carouselHide(i)
  }

  // Set next slide as active & show the next slide
  carouselShow(nextSlide)
}

if (carousel) {
  var slides = carousel.querySelectorAll('.slide')
  var indicators = carousel.querySelectorAll('.indicator')

  var switcher = setInterval(function () {
    switchSlide()
  }, speed)

  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', setSlide(i))
  }
}

const pageSlug = window.location.pathname

if (pageSlug === '/index.html' || pageSlug === '' || pageSlug === '/') {
  const banner = new Banners()
} else if (pageSlug === '/products.html') {
  setTimeout(() => {
    const products = new Products()
  }, 1000)
}


function handleCloseToggle(event){
  console.log('here');
  if (event.target.className === 'btn-close') {
    const cartContainer = document.getElementById('desktop-cart')
    const overlay = document.getElementsByClassName('overlay')
    cartContainer.style.display = 'none'
    overlay[0].style.display = 'none'
    console.log('close')
  }
  if (
    event.target.className === 'btn-cart' ||
    event.target.className === 'text' ||
    event.target.className === 'icon') {
    console.log('open cart')
    const cartContainer = document.getElementById('desktop-cart')
    const overlay = document.getElementsByClassName('overlay')
    cartContainer.style.display = 'block'
    overlay[0].style.display = 'block'
  }
}

setTimeout(() => {
  const cart = new Cart()
  if (cart) {
    document.body.addEventListener('click', handleCloseToggle, false)
    document.body.addEventListener('click', cart.updateItemQuantity, false)
  }
}, 0)
