export function setAuthentication (status, curUser) {
    return {
        type: "SET_AUTH_STATUS",
        payload : {
            status,
            curUser
        }
    }
}


export function setLogout (curUser) {
    return {
        type: "SET_LOGOUT_STATUS"
    }
}


export function addProductToCart (product, user) {
    return {
        type: "ADD_CART_ITEM",
        payload : {
            product,
            user
        }
    }
}

export function incrementProductQuantity (cartItem) {
    return {
        type: "INCREMENT_CART_PRODUCT_QUANTITY",
        payload : {
            cartItem
        }
    }
}

export function decrementProductQuantity (cartItem) {
    return {
        type: "DECREMENT_CART_PRODUCT_QUANTITY",
        payload : {
            cartItem
        }
    }
}