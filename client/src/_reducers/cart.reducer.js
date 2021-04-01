import { cartConstants } from "../Constants";

const initialState = {
    showModal: false,
    cartItem: 0,
    cartDetails: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case cartConstants.SHOW_CART_MODAL:
            return {
                ...state, showModal: true
            }
        case cartConstants.HIDE_CART_MODAL:
            return {
                ...state, showModal: false
            }
        case cartConstants.ADD_TO_CART:
            const duplicateObj = state.cartDetails.find(item => item.id === action.product.id);
            let result = [];
            if (duplicateObj == undefined) {
                result = state.cartDetails.concat({ ...action.product, count: 1 })
            } else {
                result = state.cartDetails.map(item => {
                    if (item.id == duplicateObj.id) {
                        item.count = item.count + 1
                    }
                    return item;
                })
            }
            return {
                ...state,
                cartDetails: result,
                cartItem: state.cartItem + 1
            }
        case cartConstants.REMOVE_FROM_CART:
            const duplicates = state.cartDetails.find(item => item.id === action.product.id);
            let removedCarts = [];
            if (duplicates.count == 1) {
                removedCarts = state.cartDetails.filter(item => item.id !== action.product.id);
            } else {
                removedCarts = state.cartDetails.map(item => {
                    if (item.id == duplicates.id) {
                        item.count = item.count - 1
                    }
                    return item;
                })
            }
            return {
                ...state,
                cartDetails: removedCarts,
                cartItem: state.cartItem - 1
            }
        default:
            return state;
    }
}