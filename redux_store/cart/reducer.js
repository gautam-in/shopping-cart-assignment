import {
  TOGGLE_CART,
  } from './constants';

const InitialState = {
  isOpen: false,
  cartItems : [],
}

const cart = (state = InitialState, action) => {
  let copy = { ...state, cartItems: [...state.cartItems] }
  const{cartItems} = copy
  switch (action.type) {
    case TOGGLE_CART:
      copy.isOpen = !copy.isOpen
    return copy
    default:
    return copy
  }
};

export default cart;