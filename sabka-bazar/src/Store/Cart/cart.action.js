export const ADD_CART = "ADD_CART";
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const DELETE_CART = "DELETE_CART";
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS";

export function addCart(product) {
  return {
    type: ADD_CART,
    payload: product,
  };
}

export function addCartSuccess(product) {
  return {
    type: ADD_CART_SUCCESS,
    payload: product,
  };
}

export function deleteCart(product) {
  return {
    type: DELETE_CART,
    payload: product,
  };
}

export function deleteCartSuccess(product) {
  return {
    type: DELETE_CART_SUCCESS,
    payload: product,
  };
}
