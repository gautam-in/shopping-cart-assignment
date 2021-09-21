import { ADD_ITEM, DELETE_ITEM_COUNT, ADD_ITEM_COUNT } from "./cartTypes";

export const addCartDetails = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const addCartItemCount = (id) => {
  return {
    type: ADD_ITEM_COUNT,
    payload: id,
  };
};

export const deleteCartItemCount = (id) => {
  return {
    type: DELETE_ITEM_COUNT,
    payload: id,
  };
};
