import React, { createContext, useReducer } from "react";
import { cartReducers } from "./reducer";

const initialState = {
  count: 0,
  products: {},
  showCart: false,
};

export const GlobalAppContext = createContext(initialState);

const GlobalAppProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducers, initialState);

  return (
    <GlobalAppContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </GlobalAppContext.Provider>
  );
};

export default GlobalAppProvider;
