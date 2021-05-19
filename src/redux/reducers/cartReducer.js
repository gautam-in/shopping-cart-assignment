import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_MODAL, HIDE_MODAL } from "../actions/action-types";
const initialState = {
    cartItem: 0,
    cartList: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const duplicateObj = state.cartList.find(item => item.id === action.product.id);
            let result = [];
            if (duplicateObj == undefined) {
                result = Object.assign([], state.cartList, state.cartList.push({ ...action.product, count: 1 }))
            } else {
                result = state.cartList.map(item => {
                    if (item.id == duplicateObj.id) {
                        item.count = item.count + 1
                    }
                    return item;
                })
            }
            return {
                ...state,
                cartList: result,
                cartItem: state.cartItem + 1
            }
        case REMOVE_FROM_CART:
            const duplicates = state.cartList.find(item => item.id === action.product.id);
            let removedCarts = [];
            if (duplicates.count == 1) {
                removedCarts = state.cartList.filter(item => item.id !== action.product.id);
            } else {
                removedCarts = state.cartList.map(item => {
                    if (item.id == duplicates.id) {
                        item.count = item.count - 1
                    }
                    return item;
                })
            }
            return {
                ...state,
                cartList: removedCarts,
                cartItem: state.cartItem - 1
            }

        default:
            return state;
    }
}