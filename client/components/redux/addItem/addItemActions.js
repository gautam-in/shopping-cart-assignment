import * as types from "./addItemTypes";

/* Action Creator */
export const addItem = (list) => {
  /* Action object*/
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
