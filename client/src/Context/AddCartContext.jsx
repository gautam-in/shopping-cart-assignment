import React, { createContext, useState, useEffect } from "react";

export const AddToCartContext = createContext();

export default (props) => {
  const [cart, setCart] = useState([]);
  // let cart = [];
  // const setCart = (data) => {
  //   // setCart(data);
  //   cart = data;
  // };

  useEffect(() => {
    console.log("cart changed", cart);
  }, [cart]);
  console.log("cart changed", cart);

  return (
    <AddToCartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </AddToCartContext.Provider>
  );
};
