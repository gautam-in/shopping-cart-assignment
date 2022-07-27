import { createContext, useState, useEffect } from "react";

const initialState = {
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  removeItemFromCart: () => {},
};
export const addCartItem = (cartItem, productsToAdd) => {
  const isItemExists = cartItem.find((item) => item.id === productsToAdd.id);
  if (isItemExists) {
    return cartItem.map((cartItm) =>
      cartItm.id === productsToAdd.id
        ? { ...cartItm, quantity: cartItm.quantity + 1 }
        : cartItm
    );
  }
  //return new array with modified/new cart item
  return [...cartItem, { ...productsToAdd, quantity: 1 }];
};
export const removeCartItem = (cartItem, cartItemToRemove) => {
  const isItemExists = cartItem.find((item) => item.id === cartItemToRemove.id);
  if (isItemExists.quantity === 1) {
    return cartItem.filter((item) => item.id !== cartItemToRemove.id);
  }
  return cartItem.map((cartItm) =>
    cartItm.id === cartItemToRemove.id
      ? { ...cartItm, quantity: cartItm.quantity - 1 }
      : cartItm
  );
};
export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const count = cartItems.reduce((total, cart) => total + cart.quantity, 0);
    setItemCount(count);
  }, [cartItems]);
  const addItemToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const value = {
    showCart,
    setShowCart,
    cartItems,
    addItemToCart,
    itemCount,
    removeItemFromCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
