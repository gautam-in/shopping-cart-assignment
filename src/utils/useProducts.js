import React, { useState, useEffect } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import Products from "../../server/products/index.get.json";
import Categories from "../../server/categories/index.get.json";

export default function useProducts() {
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch("/products/:id");

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  function handleProduct(id) {
    if (id) {
      navigate(`/products/${id}`);
    } else {
      navigate(`/products`);
    }

    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (!match) {
      setFilteredProduct(Products);
    } else {
      setFilteredProduct(
        Products.filter((product) => product.category === match.params.id)
      );
    }
  }, [location]);

  return {
    filteredCategory,
    filteredProduct,
    handleProduct,
  };
}
