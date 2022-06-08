import { UPDATE_PRODUCTS } from "./ProductActionTypes";

export const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: products,
  };
};
