import { createContext } from "react";
import noop from "lodash/noop";

const CartContext = createContext({
  open: false,
  openCart: noop,
  closeCart: noop,
  toggleCart: noop,
  products: [],
  addToCart: noop,
  removeFromCart: noop,
});

export default CartContext;
