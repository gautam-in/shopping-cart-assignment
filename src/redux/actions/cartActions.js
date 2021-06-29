import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DECREMENT_PRODUCT_QUANTITY_IN_CART,
  INCREMENT_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_TO_CART,
} from "../constants/constants";

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    });
  };
};
