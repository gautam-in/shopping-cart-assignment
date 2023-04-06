import { createContext, useContext } from 'react';

export const ItemContext = createContext();

// Create a custom hook to consume the context
export const useItemContext = () => useContext(ItemContext);
