/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from "react";
import { actions } from "./action";
import { initialState, reducer } from "./reducer";

export const SabkaBazarContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    cart: state.cart,
    products: state.products,
    addToCart: (productId) => {
      dispatch({ type: actions.ADD_CART_COUNT, productId });
    },
    removeFromCart: (productId) => {
      dispatch({ type: actions.REMOVE_CART_COUNT, productId });
    },
    addProducts: (products) => {
      dispatch({ type: actions.ADD_PRODUCTS, products });
    },
  };

  return (
    <SabkaBazarContext.Provider value={value}>
      {children}
    </SabkaBazarContext.Provider>
  );
};
