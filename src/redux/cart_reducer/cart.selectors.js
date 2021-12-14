import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

const cartItemTotalCount = createSelector([cartItemsSelector], (cartItems) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

const cartItemsTotalAmount = createSelector([cartItemsSelector], (cartItems) =>
  cartItems.reduce((acc, { price }) => acc + price, 0)
)

export { cartItemsSelector, cartItemTotalCount , cartItemsTotalAmount};
