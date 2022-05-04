import * as productActions from "./products.action";

let initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
