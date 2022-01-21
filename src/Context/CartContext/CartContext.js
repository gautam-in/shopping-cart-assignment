import { createContext } from "react";

const initialState = {
  count: 0,
  products: {},
  cartOpen: false,
};

const CartContext = createContext(initialState);

export default CartContext;
