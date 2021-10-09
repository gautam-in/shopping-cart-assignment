import * as React from "react";

import CartContext from "../contexts/cartContext";
import CartReducer from "../reducers/cartReducer";

export default function CartContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(CartReducer, {
    open: false,
    products: [],
  });

  const openCart = () => {
    dispatch({ type: "CART_OPEN" });
  };
  const closeCart = () => {
    dispatch({ type: "CART_CLOSE" });
  };
  const toggleCart = (value) => {
    dispatch({ type: "CART_TOGGLE", value: value });
  };

  const addToCart = (productInfo) => {
    dispatch({ type: "ADD_TO_CART", payload: productInfo });
  };
  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", id: productId });
  };

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
