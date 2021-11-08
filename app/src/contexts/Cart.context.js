import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const setCartItems = (item) => {
    const existingProduct = cartProducts.find(
      (product) => product.id === item.id
    );
    let newCartProducts;

    if (existingProduct) {
      newCartProducts = cartProducts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    } else {
      newCartProducts = [...cartProducts, { ...item, quantity: 1 }];
    }

    setCartProducts(newCartProducts);
  };

  const removeCartItems = (item) => {
    let newCartProducts;

    const existingProduct = cartProducts.find(
      (product) => product.id === item.id
    );

    if (existingProduct.quantity > 1) {
      newCartProducts = cartProducts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    } else {
      newCartProducts = cartProducts.filter(
        (product) => product.id !== item.id
      );
    }

    setCartProducts(newCartProducts);
  };
  return (
    <CartContext.Provider
      value={{ cartProducts, setCartItems, removeCartItems }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
