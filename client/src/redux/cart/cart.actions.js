import cartTypes from "./cart.types";

export const cartHandler = ()=>({
    type: cartTypes.HANDLE_CART
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})