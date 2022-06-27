export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => cartItem.price * cartItem.quantity + total,
    0
  );

export const selectCartTotalCount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => cartItem.quantity + total,
    0
  );
