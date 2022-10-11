import * as types from "./actionType";

const getProduct = (result) => ({
  type: types.GET_PROD,
  payload: result,
});
const removeItems = (result) => ({
  type: types.REMOVE_CART,
  payload: result,
});
const getCart = (result) => ({
  type: types.GET_CART,
  payload: result,
});

export const loadProduct = (data) => {
  return async function (dispatch) {
    dispatch(getProduct(data));
  };
};
export const removeProduct = (data) => {
  return async function (dispatch) {

    dispatch(removeItems(data));
  };
};

export const loadCart = (data) => {
  return async function (dispatch) {
    dispatch(getCart(data));
  };
};
