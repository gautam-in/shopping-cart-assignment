import { actionTypes } from "../Action";

const getProductsReducer = (products = [], action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return action.payload;
        default:
            return products;
    }
}

export default getProductsReducer;