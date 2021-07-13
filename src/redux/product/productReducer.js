import { GET_PRODUCT } from "./actionType";
let productState = {
  product: [],
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
