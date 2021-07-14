import { createContext } from 'react';
import { useContext } from 'react/cjs/react.development';

const AppContext = createContext();
const AppContextProvider = AppContext.Provider;

function AppProvider({ children }) {
  // add data here for the application
  const [data, setData] = useContext({
    allProducts: [],
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
export { AppProvider, useAppData };
