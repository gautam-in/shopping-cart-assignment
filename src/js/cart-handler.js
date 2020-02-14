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
      this.updateCartView(items, templateResponse)
    }
    return true
  }
  updateCartView = (numberOfItems,data) => {
    document.getElementById('cart-items').innerHTML = `${numberOfItems} Items`
    renderHTML('desktop-cart', cartTemplate, data)
  }
  updateCartData = (productId, updateCartFlag) => {
    const localData = this.storage.getLocaldata('cart')
    const { data } = localData
    let itemTobeUpdated = data.filter((item)=> item.id === productId)
    const quantity = updateCartFlag ? itemTobeUpdated[0].quantity + 1 : itemTobeUpdated[0].quantity - 1
    if(quantity===0){
      alert('are you sure  you want to delete the items from your cart')
      if(this.storage.removeItemFromLIst(productId)){
        this.generateCartView()
      }
    }else {
      itemTobeUpdated[0].quantity = quantity
      itemTobeUpdated[0].totalPrice = quantity * itemTobeUpdated[0].price
      const isCartUpdated = this.storage.updateCartItemQtyAndPrice('cart',itemTobeUpdated[0])
      if(isCartUpdated){
        this.generateCartView()
      }else{
        console.error('error in updating the cart')
      }
    }
  }

  generateCartView = () =>{
    const storageData = JSON.parse(window.localStorage.cart)
    const newCartData = {
      items:storageData.length,
      data:storageData
    }
    renderHTML('desktop-cart', cartTemplate, newCartData)
    console.log('cart updated')
  }

  updateItemQuantity = (event) =>{
    if (event.target.className === 'btn-increment') {
      const { productId } =  event.target.dataset
      this.updateCartData(productId, true)
    } else if (event.target.className === 'btn-decrement') {
      const { productId } =  event.target.dataset
      this.updateCartData(productId, false)
    }
  }
}
