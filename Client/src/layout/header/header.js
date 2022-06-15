import './header.scss'
import EventEmitter from '../../modules/EventEmitter';
import { productEvent } from '../../controllers/productList/productListController';
export const headerEvent = new EventEmitter();

function HeaderLayoutController() {
  this.cartItems = [];
  this.cartLength = 0;
  // this.cartItemMap = new Map();
  this.cartItemMap = {};
  this.cartFinalPrice = 0;

  this.cartState = false;
  this.toggleCart();
  this.manipulate();
  this.obj = {};
  this.isEmptyCart=true;

  productEvent.on('addToCart', (addedItem) => {
    this.processCart(addedItem, 'add')
  })

  document.addEventListener('click', function (e) {
    let linkPath = e.target.dataset.link;
    if (linkPath) {
      headerEvent.emit('navigate', linkPath);
    }
  })

}

HeaderLayoutController.prototype.toggleCart = function () {

  
  document.addEventListener('click', (e) => {
    // let actionData = e.target.dataset.action;
     console.log(e.target.closest('.cart-button-toggle'))
    // let buttonEle=e.target.closest('cart-button-toggle');
    if (e.target.className == 'cart-button-toggle' || e.target.closest('.cart-button-toggle')) {
     // console.log("add to cart")
      let actionData = e.target.dataset.action;
     // console.log(actionData)
      this.cartState = !this.cartState;
      headerEvent.emit('cartToggle', this.cartState);
    } 
    console.log(e.target.className)
    if(e.target.className=='sideModal-item' && e.target.className!='cart-wrapper'){
      //console.log("Backface")
      this.cartState = !this.cartState;
      headerEvent.emit('cartToggle', this.cartState);
    }
  })


}
HeaderLayoutController.prototype.manipulate = function () {

  document.addEventListener('click', (e) => {
    let selectedClass = e.target.className;
    if (selectedClass == 'increment') {
      console.log(selectedClass)
      console.log(e.target.dataset.item)
      let itemId = e.target.dataset.item
      if (itemId in this.cartItemMap) {
        console.log(this.cartItemMap)
        this.processCart(this.cartItemMap[itemId].data, 'add')
      }
    }
    else if (selectedClass == 'decrement') {
      console.log(selectedClass)
      console.log(e.target.dataset.item)
      let itemId = e.target.dataset.item
      if (itemId in this.cartItemMap) {
        this.processCart(this.cartItemMap[itemId].data)
      }
    }
  })
}


HeaderLayoutController.prototype.processCart = function (addedItem, type) {
  let obj = this.obj;
  if (addedItem && type == 'add') {
    if (addedItem.id in this.cartItemMap) {
      console.log(this.cartItemMap)
      this.cartItemMap[addedItem.id]['totalPrice'] += addedItem.price;
      this.cartItemMap[addedItem.id]['count'] += 1;
    } else {
      obj[addedItem.id] = {}
      obj[addedItem.id]['data'] = addedItem;
      obj[addedItem.id]['count'] = 1;
      obj[addedItem.id]['totalPrice'] = addedItem.price;
      this.cartItemMap = obj;
    }
  } else {
    if (addedItem.id in this.cartItemMap) {

      if (this.cartItemMap[addedItem.id]['count'] == 0) {
        return;
      }
      console.log(this.cartItemMap)
      this.cartItemMap[addedItem.id]['totalPrice'] -= addedItem.price;
      this.cartItemMap[addedItem.id]['count'] -= 1;
      if(this.cartItemMap[addedItem.id]['count'] ==0){
        delete this.cartItemMap[addedItem.id];
        console.log(this.cartItemMap)
      }
    }
  }
  // this.cartItems.push(addedItem);
  console.log("cart data", this.cartItemMap)
  this.cartLength = Object.keys(this.cartItemMap).length;
  this.cartFinalPrice = 0;
  for (let item in this.cartItemMap) {
    console.log(this.cartItemMap[item].totalPrice)
    this.cartFinalPrice += this.cartItemMap[item].totalPrice;
  }
  if(Object.keys(this.cartItemMap).length>0){
    this.isEmptyCart=false;
  }else{
    this.isEmptyCart=true;
  }
  console.log("empty cart",this.isEmptyCart)
  headerEvent.emit('headerCartUpdated', true);
}



export { HeaderLayoutController }