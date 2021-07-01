import * as t from '../types';


const incrementCounter = (cartCount)=>{
    cartCount = cartCount+1
    return {type:t.CART_COUNT_INCREMENT,payload:cartCount}
}

const decrementCounter = (counter)=>({type:t.CART_COUNT_INCREMENT,payload:counter})

export {
    incrementCounter,
    decrementCounter
}