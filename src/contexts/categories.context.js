import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
    categories: null,
    setCategories: () => null
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)});
            
    }, [])
    const value = {categories};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}