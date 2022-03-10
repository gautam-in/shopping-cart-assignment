import CartActionType from "./Cart-ActionType";

export const toggleCartHidden = () =>({
    type:CartActionType.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) =>({
    type:CartActionType.ADD_ITEM_TO_CART,
    payload:item
})

export const totalItemsCost = () =>({
    type:CartActionType.TOTAL_ITEMS_COST,
})

export const itemQuantity = () =>({
    type:CartActionType.ITEMS_QUANTITY,
})

export const removeItemFromCart = (item) =>({
    type:CartActionType.REMOVE_ITEM_FROM_CART,
    payload:item
})
