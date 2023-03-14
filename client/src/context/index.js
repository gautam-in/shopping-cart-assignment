import React, { createContext, useContext, useEffect, useState } from 'react';

/* Setting the initial state of the context. */
const initialState = {
  selectedCategory: '',
  isAuth: false,
  isCartOpen: false,
  cart: [],
  increaseQuantity: () => {},
  decreaseQuantity: () => {}
};

const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  /* Checking to see if there is an active user in local storage. If there is, it sets the isAuth state
  to true. */
  useEffect(() => {
    const user = localStorage.getItem('activeUser');
    if (user) {
      setIsAuth(true);
    }
  }, []);

  /**
   * If the id of the item in the cart matches the id of the item that was clicked, increase the count of
   * that item by 1
   * @param item - The item that was clicked on.
   */
  const increaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
      )
    );
  };

  /**
   * If the item's id matches the cart item's id, then return a new object with the same properties as
   * the cart item, but with the count property set to the cart item's count minus one, unless the count
   * is already one, in which case set it to one
   * @param item - The item that is being passed in from the cartItem component.
   */
  const decreaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    );
  };

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        selectedCategory,
        setSelectedCategory,
        isCartOpen,
        setIsCartOpen,
        cart,
        setCart,
        increaseQuantity,
        decreaseQuantity
      }}>
      {children}
    </Context.Provider>
  );
};

export const useShopContext = () => useContext(Context);
