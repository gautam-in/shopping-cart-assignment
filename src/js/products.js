import productCardsTemplate from '../partials/product-cards.hbs'
import HttpRequest from './httpRequest'
import ProductsDataStructure from '../constants/cartStructure'
import { renderHTML } from './utils'

export default class Products {
  constructor() {
    this.product = {...ProductsDataStructure}
    this.dataCart = []
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

  addToCart = (dataObj) => {
    this.dataCart.push(JSON.parse(JSON.stringify(dataObj)))
    console.log(this.dataCart)
  }
  getClick = () =>{
    document.body.addEventListener('click', this.handleCartData , false)
  }
  handleCartData = (event) =>{
    if (event.target.className === 'btn-cta') {
      const { prodId, prodName, prodPrice, prodImg } = event.target.dataset
      this.product.id = prodId
      this.product.name = prodName
      this.product.price = prodPrice
      this.product.imageUrl = prodImg
      const dataString = this.product
      this.addToCart(dataString)
    }
  }
}
