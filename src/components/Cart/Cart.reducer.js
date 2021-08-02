import { READ_CART, ADD_CART, RESET_CART, UPDATE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './Cart.constants';

const initialState = {
    cartDetail: [],
    _products: [],
    cartItemCount: 0,
}

export const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case READ_CART:
            return {
                ...state,
                cartDetail: action.payload ? action.payload.cartProduct.cartDetail : [],
                cartItemCount: action.payload ? action.payload.cartProduct.totalQuantity : []
            }
        case ADD_CART:
            return {
                ...state,
                cartItemCount: action.payload.totalQuantity,
                cartDetail: action.payload.cartDetail
            }
        case UPDATE_CART:
            return {
                ...state,
                cartItemCount: action.payload.totalQuantity,
                cartDetail: action.payload.cartDetail
            }
        case RESET_CART:
            return {
                ...state,
                cartDetail: [],
                cartItemCount: 0,
            }    
        default:
            return state;
    }
}

export default cartReducer;