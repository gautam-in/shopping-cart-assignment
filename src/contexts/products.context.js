import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    products: null,
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data)});
            
    }, [])
    const value = {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}