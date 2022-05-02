import * as actionTypes from "./action-types";

export const toggleCart = () => {
  return {
    type: actionTypes.TOGGLE_CART,
  };
};

export const closeCart = () => {
  return {
    type: actionTypes.CLOSE_CART,
  };
};

export const addToCart = (payload) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload,
  };
};

export const incrementItem = (id) => {
  return {
    type: actionTypes.INCREMENT_CART_ITEM_QUANTITY,
    payload: id,
  };
};

export const decerementItem = (id) => {
  return {
    type: actionTypes.DECREMENT_CART_ITEM_QUANTITY,
    payload: id,
  };
};
