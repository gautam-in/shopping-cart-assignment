export const getCartQuantity = (cartItems) => {
  const quantity = cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);
  return quantity;
};
