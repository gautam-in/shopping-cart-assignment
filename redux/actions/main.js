import * as t from '../types';


const incrementCounter = (cartCount) => ({type:t.CART_COUNT_INCREMENT,payload:cartCount+1})
const decrementCounter = (cartCount) => ({type:t.CART_COUNT_DECREMENT,payload:cartCount++})
const cartOpen = () => ({type:t.CART_OPEN,payload:true})
const cartClose = () => ({type:t.CART_CLOSE,payload:false})
export { incrementCounter, decrementCounter, cartOpen, cartClose }