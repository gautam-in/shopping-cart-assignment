import { ADD_ITEM_TO_CART , CLEAR_ITEM_FROM_CART , REMOVE_ITEM_FROM_CART   } from "./types";

export const addItemToCart = (item) =>({
    type:ADD_ITEM_TO_CART,
    payload:item
});

export const removeItemFromCart = (item) =>({
    type:REMOVE_ITEM_FROM_CART,
    payload:item
});

export const clearItemFromCart = (item) =>({
    type:CLEAR_ITEM_FROM_CART,
    payload:item
});
