import { PRODUCT_ACTION_TYPES } from "./product.type";

const PRODUCT_INITIAL_STATE = {
    productItems: [],
    isProductsLoading: true
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_ACTION_TYPES.SET_PRODUCT_DATA:
            return {...state, productItems: payload, isProductsLoading: false}
        default:
            return state;
    }
}