import React from 'react';

// set the defaults
const CartContext = React.createContext({
  cart: [],
  setCart: () => {},
});

export default CartContext;
