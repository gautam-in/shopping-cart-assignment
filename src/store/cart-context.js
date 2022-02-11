import React from "react";

const CartContext = React.createContext({
  items: {},
  totalAmount: 0,
  totalItems: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

export default CartContext;
