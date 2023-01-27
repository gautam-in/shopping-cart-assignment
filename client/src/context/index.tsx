import React, { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  selectedCategory: ""
}
const Context = createContext<any>(initialState);

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state
 }
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const [product, productDispatch] = useReducer<any>(productReducer, initialState);
  return (
    <Context.Provider
      value={{
        product,
        productDispatch,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMarket = () => useContext(Context)