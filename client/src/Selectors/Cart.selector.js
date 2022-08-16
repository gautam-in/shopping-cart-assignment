// import { useSelector } from 'react-redux';
import { createSelector } from "reselect";
import { fetchCartAction } from "../Action";
import { store } from "../store";

store.dispatch(fetchCartAction());

const selectCartReducer = (state) => state.cartItems.cartItems;
//   const cartSelectItem = useSelector(selectCartReducer, shallowEqual);

export const cartStore = createSelector(
  [selectCartReducer],
  (cartItems) => cartItems
);

export const cartTotalSelect = createSelector([cartStore], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const cartTotalItemsSelect = createSelector([cartStore], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

