import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUNATITY";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProductsToCart = (product, quantity) => {
  return (dispatch) => {
    product.quantity = quantity;
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
      },
    });
  };
};

export const incrementQuantity = (productId) => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: { productId: productId },
    });
  };
};

export const decrementQuantity = (productId) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT_QUANTITY,
      payload: { productId: productId },
    });
  };
};

export const deleteProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: { productId: productId },
    });
  };
};
