import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (cartItems) {
      const found = cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      if (found > -1) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === product.id) {
            if (cartItem.cart < cartItem.stock) {
              cartItem.cart = cartItem.cart + 1;
            }
          }
          return cartItem;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        setTotalItems(updatedCartItems);
      } else {
        cartItems.push({ ...product, cart: 1 });
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setTotalItems(cartItems);
      }
    } else {
      const item = [{ ...product, cart: 1 }];
      localStorage.setItem("cart", JSON.stringify(item));
      setTotalItems(item);
    }
  };

  const removeFromCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (item.cart > 1) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.cart = cartItem.cart - 1;
        }
        return cartItem;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setTotalItems(updatedCartItems);
    } else {
      const filteredCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCartItems));
      setTotalItems(filteredCartItems);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, totalItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
