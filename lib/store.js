import { useState, createContext } from 'react';

import { useContext } from 'react/cjs/react.development';

const AppContext = createContext();
const AppContextProvider = AppContext.Provider;

function AppStateProvider({ children }) {
  // add data here for the application
  const [data, setData] = useState({
    categories: [],
    products: [],
    cartOpen: false,
    totalCart: 0,
  });
  return (
    <AppContextProvider value={{ data, setData }}>
      {children}
    </AppContextProvider>
  );
}
function useAppData() {
  const all = useContext(AppContext);
  return all;
}
export { AppStateProvider, useAppData };
