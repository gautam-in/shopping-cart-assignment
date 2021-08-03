import { useReducer, createContext } from "react";

export const ShoppingContext = createContext();

const initialState = {
  products: [],
  categories: [],
};
