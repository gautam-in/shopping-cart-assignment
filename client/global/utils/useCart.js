import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ADD_TO_CART } from "../services";

const CartStateContext = createContext();
const Provider = CartStateContext.Provider;

export const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const addCartItem = async (item) => {
    try {
      const successResponse = await axios.post(ADD_TO_CART, {
        productId: item.id,
      });
      if (successResponse) {
        const existingItemIndex = cartItems.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          const existingCartItem = cartItems[existingItemIndex];
          const updatedCartItem = {
            ...existingCartItem,
            count: existingCartItem.count + 1,
          };
          updatedCartItems[existingItemIndex] = updatedCartItem;
          setCartItems(updatedCartItems);
        } else {
          setCartItems([...cartItems, { ...item, count: 1 }]);
        }
      }
    } catch (error) {
      console.log("Error adding item to the cart", error);
    }
  };

  const removeCartItem = (productId) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === productId
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const existingCartItem = cartItems[existingItemIndex];
      const existingCartItemCount = existingCartItem?.count;
      if (existingCartItemCount === 1) {
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        const updatedCartItem = {
          ...existingCartItem,
          count: existingCartItem.count - 1,
        };
        updatedCartItems[existingItemIndex] = updatedCartItem;
      }
      setCartItems(updatedCartItems);
    }
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, cartItem) => count + cartItem.count, 0);
  };

  const getTotalCartAmount = () =>
    cartItems.reduce(
      (amount, cartItem) => amount + +cartItem.count * +cartItem.price,
      0
    );

  return (
    <Provider
      value={{
        cartOpen,
        cartItems,
        toggleCart,
        closeCart,
        addCartItem,
        removeCartItem,
        getCartItemsCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
