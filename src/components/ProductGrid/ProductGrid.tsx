import React from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../index";
import type { Product, ProductGridProps } from "../../types/customTypes";
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
    const productsByCategory = products.filter((product: Product) => product.category === id).map((product: Product) => getProductCard(product));

    if(productsByCategory.length === 0) {
      return (<p className="no-products">Sorry No Products available right now</p>);
    } 

    return productsByCategory;
  }

  return (
    <div className="product-grid">
      { id === undefined ? getAllProducts() : getProductsByCategory() }
    </div>
  )
}

export default ProductGrid;

