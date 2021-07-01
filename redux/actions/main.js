import * as t from '../types';


const incrementCounter = (cartCount) => ({type:t.CART_COUNT_INCREMENT,payload:cartCount+1})
const decrementCounter = (cartCount) => ({type:t.CART_COUNT_DECREMENT,payload:cartCount++})
export { incrementCounter, decrementCounter }