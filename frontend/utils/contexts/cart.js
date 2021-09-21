import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [_cartItems, _setCartItems] = useState([]);
  const [_cartTotal, _setCartTotal] = useState(0);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  function addToCart(item) {
    const tempCartItems = [..._cartItems];

    const { id, price } = item;

    if (tempCartItems.length === 0) {
      item['quantity'] = 1;

      tempCartItems.push(item);
    } else {
      let foundAt = -1;

      for (let i = 0; i < tempCartItems.length; i++) {
        const element = tempCartItems[i];

        if (element['id'] === id) {
          foundAt = i;
          break;
        }
      }

      if (foundAt > -1) {
        tempCartItems[foundAt]['quantity'] += 1;
      } else {
        item['quantity'] = 1;

        tempCartItems.push(item);
      }
    }

    _setCartItems(tempCartItems);
    _setCartTotal(price + _cartTotal);
  }

  function removeItemFromCart(item) {
    const tempCartItems = [..._cartItems];

    const { id, price } = item;

    let foundAt = -1;

    for (let i = 0; i < tempCartItems.length; i++) {
      const element = tempCartItems[i];

      if (element['id'] === id) {
        foundAt = i;
        break;
      }
    }

    if (tempCartItems[foundAt]['quantity'] === 1) {
      tempCartItems.splice(foundAt, 1);
    } else {
      tempCartItems[foundAt]['quantity'] -= 1;
    }

    _setCartItems(tempCartItems);
    _setCartTotal(_cartTotal - price);
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        addToCart,
        _cartItems,
        _cartTotal,
        removeItemFromCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
