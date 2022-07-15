import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});


export const addCartItem = (item) => (dispatch, getState) => {

  let cartItems = addItemToCart(getState().cart.cartItems, item);

  dispatch({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: cartItems
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const removeItem = (item) => (dispatch, getState) => {

  let cartItems = removeItemFromCart(getState().cart.cartItems, item)

  dispatch({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItems
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const setCategory = item => ({
  type: CartActionTypes.SET_CATEGORY,
  payload: item
});
