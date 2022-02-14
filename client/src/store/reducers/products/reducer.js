import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAILURE,
    GET_PRODUCT_LIST_BY_CATEGORY,
} from "./action";


const initialState = {
    allProducts: [],
    loading: false,
};

function productListReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { ...state, loading: true };
        case GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            };
        case GET_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default productListReducer;