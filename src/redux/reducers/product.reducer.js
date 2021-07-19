import { productsConstants } from "../actions/constants";

const initialState = {
    products: [],
    loading: false,
    error: null,
  };

  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
        state = {
          ...state,
          products: action.payload.products,
        };
        break;
  
      default:
        return state;
    }
    return state;
  };
  
  export default productReducer;