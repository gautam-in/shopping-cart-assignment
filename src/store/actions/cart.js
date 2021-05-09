import * as actionTypes from "./actionTypes"
export const addToCart=(product)=>{
return{
    type:actionTypes.ADD_TO_CART,
    product:product
}
}