import { cartConstants } from "../Constants";

const showCart = () => {
    return {
        type: cartConstants.SHOW_CART_MODAL,
    };
};

const hideCart = () => {
    return {
        type: cartConstants.HIDE_CART_MODAL
    }
}

const addToCart = (product) => {
    return {
        type: cartConstants.ADD_TO_CART,
        product
    }
}

const removeFromCart = (product) => {
    return {
        type: cartConstants.REMOVE_FROM_CART,
        product
    }
}

const clearCart = () => {
    return {
        type: cartConstants.CLEAR_CART,
    }
}

export const cartActions = {
    showCart,
    hideCart,
    addToCart,
    removeFromCart,
    clearCart
}