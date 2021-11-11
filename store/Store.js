import { createContext, useContext, useReducer } from "react";
// Context
const Store = createContext();

// Get the current store
export const useStore = () => {
  return useContext(Store);
};

// Set the current store
export const StoreProvider = ({ reducer, initialState, children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
