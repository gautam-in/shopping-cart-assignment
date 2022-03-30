import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants";

const cartReducer = (initialState = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      const exist = initialState.some((item) => item.id === payload.id);
      if (!exist) {
        payload.quantity = 1;
        return [...initialState, payload];
      }
      return initialState.map((item) => {
        if (item.id === payload.id) {
          item.quantity += 1;
        }
        return item;
      });

    case REMOVE_PRODUCT_FROM_CART:
      return initialState.filter((item) => item.id !== payload.id);
    default:
      return initialState;
  }
};

export default cartReducer;
