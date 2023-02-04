import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import bannerReducer from "../Features/banner/bannerSlice";
import categoriesReducer from "../Features/categories/categoriesSlice";
import userReducer from "../Features/user/userSlice";
import productsReducer from "../Features/products/productsSlice";
import cartReducer from "../Features/shopping-cart/cartSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        banner: bannerReducer,
        categories: categoriesReducer,
        user: userReducer,
        products: productsReducer,
        cart: cartReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
