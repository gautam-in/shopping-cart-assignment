/* eslint-disable no-plusplus */
import { useState, createContext } from 'react';

import { useContext } from 'react/cjs/react.development';

const AppContext = createContext();
const AppContextProvider = AppContext.Provider;

function AppStateProvider({ children }) {
  // add data here for the application
  const [data, setData] = useState({
    categories: [],
    products: [],
    cartOpen: true,
    cart: new Map(),
    totalCart: 0,
  });
  function toggleCart() {
    setData({ ...data, cartOpen: !data.cartOpen });
  }
  function addToCart(product) {
    let entry;
    if (!data.cart.has(product.id)) {
      // if no products
      product.quantity = 1;
      entry = data.cart.set(product.id, product);
    } else {
      // if products
      const productData = data.cart.get(product.id);
      productData.quantity++;
      entry = data.cart.set(product.id, productData);
    }
    setData({ ...data, cart: entry });
    setData({ ...data, totalCart: ++data.totalCart });
  }
  function changeQuantity(id, operation) {
    if (operation === 'add') {
      const product = data.cart.get(id);
      product.quantity++;
      setData({ ...data, cart: data.cart.set(id, product) });
      setData({ ...data, totalCart: ++data.totalCart });
    }
    if (operation === 'substract') {
      const product = data.cart.get(id);
      product.quantity--;
      if (product.quantity <= 0) {
        const { cart } = data;
        cart.delete(id);

        setData({ ...data, cart });
        setData({ ...data, totalCart: --data.totalCart });

        return;
      }
      setData({ ...data, cart: data.cart.set(id, product) });
      setData({ ...data, totalCart: --data.totalCart });
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
