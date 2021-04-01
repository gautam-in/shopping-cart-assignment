import { productConstants } from "../Constants";

const initialState = {
    productsList: []
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS:
            return {
                ...state, productsList: action.productsList
            }
        default:
            return state;
    }
}