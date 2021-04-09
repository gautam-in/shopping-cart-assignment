import * as types from "./actionTypes"

const addCartItem = (data) => ({ type: types.ADD_CART_ITEM, data});


const incrementQnty = (data) => ({ type: types.INCREMENT_QTY, data });
const decrementQnty = (data) => ({ type: types.DECREMENT_QTY, data });
const cartUpdate = (data) => ({ type: types.EMPTY_CART, data });

export const handleCart = (data) => (dispatch) => {
  dispatch(addCartItem({ ...data, qnty: 1 }));
};

export const handleAddItem = (data) => (dispatch) => {
  dispatch(incrementQnty(data));
};

export const handleRemoveItem = (data) => (dispatch) => {
  dispatch(decrementQnty(data));
};

export const handleCartUpdate = () => (dispatch) => {
  dispatch(cartUpdate());
};
