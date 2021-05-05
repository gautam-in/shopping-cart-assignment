import * as types from "./addItemTypes";

export const addItem = (list) => {
  return { type: types.ADD_ITEM, payload: list };
};

export const incrementItem = (list) => {
  return { type: types.INCREMENT_ITEM, payload: list };
};

export const decrementItem = (list) => {
  return { type: types.DECREMENT_ITEM, payload: list };
};
export const removeItem = (list) => {
  return { type: types.REMOVE_ITEM, payload: list };
};
