import * as types from './products.types';

const INITIAL_STATE = {
    categoryId: '',
    products: []
}

export function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                categoryId: action.payload.categoryId
            }
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}