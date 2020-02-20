import productCardsTemplate from '../partials/product-cards.hbs'
import HttpRequest from './httpRequest'
import ProductsDataStructure from '../constants/cartStructure'
import LocalStore from './storage'
import {
  renderHTML
} from './utils'
import Cart from './cart-handler'


/**
* Creates a new Products.
* @class Products
* @classdesc calls product api and populates products view & updates cart
*/

export default class Products {

  /**
  * @constructs Products
  */

  constructor() {
    this.product = {
      ...ProductsDataStructure
    }
    this.getProducts()
    this.storage = new LocalStore()
    this.cart = new Cart()
  }

  /**
  * @function getProducts
  * call the product api (xhr request) & calls renderHTML functions
  */
  getProducts = () => {
    const AJAX = new HttpRequest('GET', `${process.env.API_URL}products`, '')
    AJAX.customAjax()
    .then(result => {
      document.getElementById('loader').style.display = 'none'
      document.getElementById('products-list-container').style.display = 'flex'
      renderHTML('products-cards-container', productCardsTemplate, result)
      this.getClick()
    })
    .catch(function (error) {
      console.log('Something went wrong', error)
    })
  }

  /**
  * @function addToCart
  * @param {object} dataObj - accepts object from the handlecartdata funtion
  * call the product api (xhr request) & calls renderHTML functions
  */
  addToCart = (dataObj) => {
    const isLocalUpdated = this.storage.setLocaldata('cart', dataObj)
    isLocalUpdated ? this.cart.handleCartView() : console.error('cart not updated')
    return true
  }

  /**
  * @function getClick
  * catches click funtion and then takes callback handleCartData
  */
  getClick = () => {
    document.body.addEventListener('click', this.handleCartData, false)
  }


  /**
  * @function handleCartData
  * @param {object} event - takes event and get data from the clicked item binded with the data attribute
  */
  handleCartData = (event) => {
    if (event.target.className === 'btn-cta' || event.target.className === 'btn-cta mobile tablet') {
      const {
        prodId,
        prodName,
        prodPrice,
        prodImg
      } = event.target.dataset
      if (!prodId) return console.error('cart could not be updated')
      this.product.id = prodId
      this.product.name = prodName
      this.product.price = prodPrice
      this.product.imageUrl = prodImg
      this.product.quantity = 1
      const dataString = this.product
      this.addToCart(dataString)
    }
  }
}
