import React from "react";
import { Routes, Route, useParams, Outlet } from "react-router-dom";
import type { Product } from "../../types/customTypes";
import products from "../../server/products/index.get.json";
import "./ProductGrid.scss";

export const ProductGrid = () => {

  const params = useParams();
  const { id } = params;

  const getProductsByCategory = () => {
    return products.filter((product: Product) => product.category === id).map((product: Product) => <div key={product.id}>{product.name}</div>)
  }

  return (
    <div className="product-grid">
      { getProductsByCategory() }
    </div>
  )
}

