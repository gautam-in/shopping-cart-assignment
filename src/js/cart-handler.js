import cartTemplate from '../partials/cart.hbs'
import HttpRequest from './httpRequest'
import ProductsDataStructure from '../constants/cartStructure'
import LocalStore from './storage'
import { renderHTML } from './utils'

export default class Cart {
  constructor() {
    this.storage = new LocalStore()
    this.handleCartView()
  }
  handleCartView = (event) =>{
    const isDataPresent = this.storage.getLocaldata('cart')
    const { items , data, ifExists} = isDataPresent
    console.log(isDataPresent)
    if(ifExists && items !== 0){
      const templateResponse = {items:items, data:data}
      this.updateCart(items, templateResponse)
    }
    return true
  }
  updateCart = (numberOfItems,data) => {
    document.getElementById('cart-items').innerHTML = `${numberOfItems} Items`
    renderHTML('desktop-cart', cartTemplate, data)
  }
}
