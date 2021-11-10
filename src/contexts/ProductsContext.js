import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
export const ProductsContext = createContext();

const url = '../server/products/index.get.json';

const ProductsContextProvider = ({children}) => {

  return ( 
    <ProductsContext.Provider value={useFetch(url)} >
      { children }
    </ProductsContext.Provider>
  );
};
 
export default ProductsContextProvider;