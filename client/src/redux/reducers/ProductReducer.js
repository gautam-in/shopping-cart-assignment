import { ProductActions } from "../constants/productsAction_types";
const initialState = {
    products: [],
    product: {}
}
export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ProductActions.GET_ALL_PRODUCTS:
            return { ...state, products: [...payload] }
        case ProductActions.GET_PRODUCT_BY_ID:
            return { ...state, product: { ...payload } }
        case ProductActions.REMOVE_STORED_PRODUCTS:
            return { ...state, products: [] }
        default:
            return state;
    }
}