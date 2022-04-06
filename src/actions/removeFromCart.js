export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { id },
  };
};
