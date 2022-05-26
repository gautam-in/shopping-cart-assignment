

export const addProductToCart = data => ({
    type: "ADD_PRODUCT_TO_CART",
    payload: data
})

export const showCartModel = data => ({
    type: "SHOW_CART_MODEL",
    payload: data
})

export const increaseProductQuantity = data => ({
    type: "INCREASE_PRODUCT_QUANTITY",
    payload: data
})

export const decreaseProductQuantity = data => ({
    type: "DECREASE_PRODUCT_QUANTITY",
    payload: data
})

export const orderComplete = data => ({
    type: "ORDER_COMPLETE",
    payload: data
})