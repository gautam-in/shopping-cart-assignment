import {
  TOGGLE_CART,
  } from './constants';

//Action Creator
export const toggleCartModal = () => ({
  type: TOGGLE_CART,
});
export function toggleCart() {
  return dispatch => {
     dispatch(toggleCartModal());
  }
}
