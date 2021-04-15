import * as types  from "../../constants/actionTypes";

const initialState ={
    products:[],
}
 const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS: 
        return {
            ...state,
            products: action.payload
        }
        default:
            return state
    }
};
export default productReducer
