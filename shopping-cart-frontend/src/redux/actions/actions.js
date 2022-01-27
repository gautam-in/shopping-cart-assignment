export function AddToCart(cartItem) {
  return {
    type: "ADD_TO_CART",
    cartItem,
  };
}

export function deleteFromCart(productId) {
  return {
    type: "DELETE_FROM_CART",
    productId,
  };
}

export function decrementItemFromCart(productId) {
  return {
    type: "DECREMENT_QUANTIY",
    productId,
  };
}
