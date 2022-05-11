import { createContext,useEffect, useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
// import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
  });
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => setProducts(res.json))
      },[])
    const value = {products}

    return(
        <ProductsProvider.Provider value={value}>
        {children}    
        </ProductsProvider.Provider>
    )


}  
