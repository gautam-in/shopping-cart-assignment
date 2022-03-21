import cartActionTypes from "./cart-actiontypes";

const showCart = (val) => ({
  type: cartActionTypes.SHOW_CART,
  payload: val,
});

const addCart = (product) => ({
  type: cartActionTypes.ADD_CART,
  payload: product,
});

const removeCart = (product) => ({
  type: cartActionTypes.REMOVE_CART,
  payload: product,
});

const buyItems = (product) => ({
  type: cartActionTypes.BUY_ITEM,
  payload: product,
});

export { showCart, addCart, removeCart, buyItems };
