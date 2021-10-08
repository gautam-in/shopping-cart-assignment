import React, { createContext, useState, useEffect } from "react";

export const AddToCartContext = createContext();

const AddToCartContexts = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
  }, [cart]);

  return (
    <AddToCartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </AddToCartContext.Provider>
  );
};
export default AddToCartContexts;
