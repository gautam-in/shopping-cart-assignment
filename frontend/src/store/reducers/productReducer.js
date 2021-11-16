import { CHOOSE_CATEGORY } from "../actions/categoryAction";
import { LOAD_CATEGORIES_PRODUCTS, LOAD_PRODUCTS } from "../actions/productAction";

const intialState = {
    products:[],
    categoryProducts:[]
};

export default (state = intialState,action) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return{
                ...state,
                products:action.data,
                categoryProducts:action.data
            }
        case LOAD_CATEGORIES_PRODUCTS:
            return{
                ...state,
                products:action.data,
                categoryProducts:action.categoryProducts
            }
        case CHOOSE_CATEGORY:
            return{
                ...state,
                categoryProducts:state.products.filter(product=>product.category === action.id)
            }
    }

    return state
}