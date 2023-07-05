import React, { createContext, useContext, useState } from "react";

import { addProductToCart } from "../api/cart";
import { useToast } from "./toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { showToast } = useToast();

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, count: 1 }];
      }
    });

    addProductToCart().then((response) => {
      showToast(`${product.name} ${response.responseMessage}`);
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === productId);
      if (existingItem && existingItem.count > 1) {
        return prevCartItems.map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevCartItems.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cartItems, addToCart, removeFromCart, isCartOpen, setIsCartOpen } =
    useContext(CartContext);
  return { cartItems, addToCart, removeFromCart, isCartOpen, setIsCartOpen };
};
