export function setAuthentication (status, curUser) {
    return {
        type: "SET_AUTH_STATUS",
        payload : {
            status,
            curUser
        }
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

export function incrementProductQuantity (cartItem, user) {
    return {
        type: "INCREMENT_CART_PRODUCT_QUANTITY",
        payload : {
            cartItem,
            user
        }
    }
}

export function decrementProductQuantity (product, user) {
    return {
        type: "DECREMENT_CART_PRODUCT_QUANTITY",
        payload : {
            product,
            user
        }
    }
}