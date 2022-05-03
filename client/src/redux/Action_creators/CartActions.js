import { CartActionTypes } from "../constants/cartAction_types"

export const ADDED_TO_CART=(item)=>{
    return{
        type:CartActionTypes.ADDED_TO_CART,
        payload:item
    }
}

export const REMOVE_FROM_CART=(item)=>{
    return{
        type:CartActionTypes.REMOVE_FROM_CART,
        payload:item
    }
}