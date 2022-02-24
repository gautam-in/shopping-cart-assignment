const checkCart = (cartItems) => {
    if (cartItems.length === 0) {
      clearCart();
      return true;
    }
    return false;
  };
  module.exports = checkCart;