export const shopActions = {
  SHOW_MINICART: "SHOW_MINICART",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_CARTITEMS: "SET_CARTITEMS",
};
export const updateCartItemsAction = (newCartItems, dispatch) => {
  const cartItemCount = newCartItems.reduce(
    (total, cart) => total + cart.quantity,
    0
  );
  dispatch({
    type: shopActions.SET_CARTITEMS,
    payload: {
      cartItems: newCartItems,
      itemCount: cartItemCount,
    },
  });
};
