import {
  ADD_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartActionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const increaseQuantity = () => {
  return {
    type: INCREASE_QUANTITY,
  };
};

export const decreaseQuantity = () => {
  return {
    type: DECREASE_QUANTITY,
  };
};
