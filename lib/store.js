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
    totalCart: 0,
  });
  function toggleCart() {
    setData({ ...data, cartOpen: !data.cartOpen });
  }
  return (
    <AppContextProvider value={{ data, setData, toggleCart }}>
      {children}
    </AppContextProvider>
  );
}
function useAppData() {
  const all = useContext(AppContext);
  return all;
}
export { AppStateProvider, useAppData };
