import productCardsTemplate from '../partials/product-cards.hbs'
import HttpRequest from './httpRequest'
import { renderHTML } from './utils'

export default class Products {
  constructor() {
    this.getProducts()
  }

  getProducts = () => {
    const AJAX = new HttpRequest('GET', `${process.env.API_URL}products` , '')
    AJAX.customAjax()
    .then(result => {
      document.getElementById('loader').style.display = 'none'
      document.getElementById('products-list-container').style.display = 'flex'
      renderHTML('products-cards-container', productCardsTemplate, result)
      this.getClick()
    })
    .catch(function(error) {
      console.log('Something went wrong', error)
    })
  }
  addToCart = () => {
    console.log('hey')
  }

  getClick = () =>{
    let elementsClickable = document.getElementsByClassName('product-list')
    let buttonAddToCart = document.getElementsByTagName('button')
    if (elementsClickable !== undefined && elementsClickable !== null ){
      console.log(elementsClickable,buttonAddToCart)
      buttonAddToCart.addEventListener("click",this.addToCart, false);
    }
  }
}
