import React from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/customTypes";
import { ProductCard } from "../ProductCard/ProductCard";
import products from "../../server/products/index.get.json";
import "./ProductGrid.scss";

export const ProductGrid = () => {

  const params = useParams();
  const { id } = params;

  const getProductsByCategory = () => {
    return products.filter((product: Product) => product.category === id).map((product: Product) =>
    <ProductCard
       key={product.id}
       name={product.name}
       imageURL={product.imageURL}
       description={product.description}
       price={product.price}
       stock={product.stock}
       category={product.category}
       sku={product.sku}
       id={product.id}
    />)
  }

  return (
    <div className="product-grid">
      { getProductsByCategory() }
    </div>
  )
}

