import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext({
  cart: 0,
  cartItems: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const { Provider } = cartContext;

export const CartContextProvider = (props) => {
  const [message, setMessage] = useState("My name is context");
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(0);
  const [totalprice, setTotal] = useState(0);

  useEffect(() => {
    setCart(cartItems.reduce((count, { quantity }) => count + quantity, 0));
    const initialValue = 0;
    setTotal(
      cartItems.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        initialValue
      )
    );

    console.log(totalprice);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((items) => {
      if (items.find(({ id }) => id === product.id)) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return [
          ...items,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((items) => {
      const foundItem = items.find(({ id }) => id === product.id);
      if (foundItem?.quantity > 1) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        return items.filter(({ id }) => id !== product.id);
      }
    });
  };
  return (
    <Provider
      value={{
        message,
        setMessage,
        open,
        setOpen,
        cartItems,
        setCartItems,
        cart,
        addToCart,
        removeFromCart,
        totalprice,
        setTotal,
      }}
    >
      {props.children}
    </Provider>
  );
};
