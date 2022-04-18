import { ADD_TO_CART,DECREASE_QUANTITY,INCREASE_QUANTITY,REMOVE_FROM_CART } from "./Constants";

export const addToCart=(payload)=>{
    return {type:ADD_TO_CART,payload}
}

export const removeFromCart=(payload)=>{
    return {type:REMOVE_FROM_CART,payload}
}

export const increaseQuantity=(payload)=>{
    return {type:INCREASE_QUANTITY,payload}
}

export const decreaseQuantity=(payload)=>{
    return {type:DECREASE_QUANTITY,payload}
}