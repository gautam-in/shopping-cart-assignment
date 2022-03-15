import React, { useState, useEffect, createContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Products from "../../server/products/index.get.json";
import Categories from "../../server/categories/index.get.json";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const history = useHistory();
  const location = useLocation();

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  useEffect(() => {
    if (!location.search) {
      setFilteredProduct(Products);
    }
  }, [location]);

  function handleProduct(id) {
    setFilteredProduct(Products.filter((product) => product.category === id));
    history.push({
      pathname: `/products`,
      search: `?query=${id}`,
    });
    window.scrollTo(0, 0);
  }

  return (
    <ProductContext.Provider
      value={{ filteredCategory, filteredProduct, handleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
