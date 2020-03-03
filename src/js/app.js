import Banners from './banners'
import Products from './products'
import Cart from './cart-handler'
import { initSliderCarousel } from './carousel'

if (module.hot) {
  module.hot.accept()
}

/**
 * @function handleCloseToggle
 * Handles opening and closing of cart
 * @param {event} event -
 * looks for the button clicked and on the
 * basis of that it matches the class name of an element
 */

const handleCloseToggle = event => {
  const clickableButtons = [['btn-close'], ['btn-cart', 'text', 'icon']]
  const {
    target: { className }
  } = event
  if (clickableButtons[0].includes(className)) {
    const cartContainer = document.getElementById('desktop-cart')
    const overlay = document.getElementsByClassName('overlay')
    cartContainer.style.display = 'none'
    overlay[0].style.display = 'none'
    console.log('close')
  }
  if (clickableButtons[1].includes(className)) {
    console.log('open cart')
    const cartContainer = document.getElementById('desktop-cart')
    const overlay = document.getElementsByClassName('overlay')
    cartContainer.style.display = 'block'
    overlay[0].style.display = 'block'
  }
}

/**
 * @function initCart
 * initialize cart class instance
 * Description (binded with event listner for  watching clicks)
 */

const initCart = () => {
  const cart = new Cart()
  if (cart) document.body.addEventListener('click', handleCloseToggle, false)
  document.body.addEventListener('click', cart.updateItemQuantity, false)
}

/**
 * @function initApp
 * initialize whole app & invokes other class instances
 * on the basis of page rendering using the url
 */
const initApp = () => {
  const {
    location: { pathname }
  } = window
  const ROUTES = [
    ['/index.html', '', '/'],
    ['/products.html'],
    ['/signup.html', '/login.html']
  ]
  if (ROUTES[0].includes(pathname)) {
    if (!initSliderCarousel()) return
    const banner = new Banners()
  } else if (ROUTES[1].includes(pathname)) {
    const products = new Products()
  } else if (ROUTES[2].includes(pathname)) {
    document.getElementById('loader').style.display = 'none'
  }
  initCart()
}

/**
 * @function iife
 * iife (imidiate invoked functions) - this looks for if window is being loaded and it
 * mainatains check for event listning
 * on the basis of page rendering using the url
 */

;(() => {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(initApp, 1)
  } else {
    document.addEventListener('DOMContentLoaded', initApp)
  }
})()
