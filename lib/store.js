/* eslint-disable no-plusplus */
import { useState, createContext, useContext } from 'react';

const AppContext = createContext();
const AppContextProvider = AppContext.Provider;

function AppStateProvider({ children }) {
  // add data here for the application
  const [data, setData] = useState({
    categories: [],
    products: [],
    cartOpen: false,
    cart: new Map(),
  });
  function toggleCart() {
    setData({ ...data, cartOpen: !data.cartOpen });
  }
  function changeQuantity(id, operation) {
    if (operation === 'add') {
      const product = data.cart.get(id);
      product.quantity++;
      setData({ ...data, cart: data.cart.set(id, product) });
    }
    if (operation === 'substract') {
      const product = data.cart.get(id);
      product.quantity--;
      if (product.quantity <= 0) {
        const { cart } = data;
        cart.delete(id);

        setData({ ...data, cart });

        return;
      }
      setData({ ...data, cart: data.cart.set(id, product) });
    }
  }
  function addToCart(product) {
    let cart;
    if (!data.cart.has(product.id)) {
      // if no products
      product.quantity = 1;
      cart = data.cart.set(product.id, product);
      setData({ ...data, cart });
    } else {
      // if products is already present
      changeQuantity(product.id, 'add');
    }
  }

  return (
    <AppContextProvider
      value={{ data, setData, toggleCart, addToCart, changeQuantity }}
    >
      {children}
    </AppContextProvider>
  );
}
function useAppData() {
  const all = useContext(AppContext);
  return all;
}
export { AppStateProvider, useAppData };
