import CartActionTypes from "./cart.types";

export const addItem = (item) => {
  return {
    type: CartActionTypes.Add_Item,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartActionTypes.Remove_Item,
    payload: item,
  };
};
