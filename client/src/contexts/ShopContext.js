import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ShopContext = createContext({
  selectedCategory: '',
  setCategory: () => {},
  cartItems: [],
  updateCartItems: () => {},
  count: 0,
  cartTotal: 0,
  removeCartItem: () => {}
});

export const ShopContextProvider = (props) => {
  const [category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const updateCartItems = (productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(newCartItems);
    } else [setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])];

    setCount((prev) => prev + 1);
  };

  const removeCartItem = (cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      setCartItems(() => cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id));
    } else {
      // return back cartitems with matching cart item with reduced quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);

    const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCount(newCount);
  }, [cartItems]);
  return (
    <ShopContext.Provider
      value={{
        selectedCategory: category,
        setCategory,
        cartItems: cartItems,
        updateCartItems,
        count,
        cartTotal,
        removeCartItem
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;

ShopContextProvider.propTypes = {
  children: PropTypes.node
};
