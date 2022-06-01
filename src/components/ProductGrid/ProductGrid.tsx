import React from "react";
import { useParams } from "react-router-dom";
import type { Product, ProductGridProps } from "../../types/customTypes";
import { ProductCard } from "../ProductCard/ProductCard";
import products from "../../server/products/index.get.json";
import "./ProductGrid.scss";

export const ProductGrid = ({ cartDispatch }: ProductGridProps) => {

  const params = useParams();
  const { id } = params;

  const getProductCard = (product: Product) => {
    return (
      <ProductCard
        key={product.id}
        product={product} 
        cartDispatch={cartDispatch}
      />)
  }

  const getAllProducts = () => {
    return products.map((product: Product) => getProductCard(product));
  }
  
  const getProductsByCategory = () => {
    return products.filter((product: Product) => product.category === id).map((product: Product) => getProductCard(product));
  }

  return (
    <div className="product-grid">
      { id === undefined ? getAllProducts() : getProductsByCategory() }
    </div>
  )
}

