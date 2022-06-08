import { UPDATE_CART } from "./CartActionTypes";

export const updateCart = (item) => {
  return {
    type: UPDATE_CART,
    payload: item,
  };
};
