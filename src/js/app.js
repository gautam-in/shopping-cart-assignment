import Banners from './banners'
import Products from './products'
import Cart from './cart-handler'
import { initSliderCarousel } from './carousel'

if (module.hot) {
    module.hot.accept()
}

const handleCloseToggle = (event) => {
    console.log('here', event.target.className)
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

    const initCart = () => {
        const cart = new Cart()
        if (cart) {
            document.body.addEventListener('click', handleCloseToggle, false)
            document.body.addEventListener('click', cart.updateItemQuantity, false)
        }
    }

     const initApp = () => {
        const pageSlug = window.location.pathname
        if (pageSlug === '/index.html' || pageSlug === '' || pageSlug === '/') {
            if(!initSliderCarousel()) return
            const banner = new Banners()
        } else if (pageSlug === '/products.html') {
            const products = new Products()
        } else if (pageSlug === '/signup.html' || pageSlug === '/login.html') {
            document.getElementById('loader').style.display = 'none'
        }
        initCart()
    }

    (() => {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(initApp, 1)
        } else {
            document.addEventListener('DOMContentLoaded', initApp)
        }
    })()
