import React from "react";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { ProductMenu } from "../../components/ProductMenu/ProductMenu";

export const Products = () => {
  return (
    <div style={{"fontSize": "10rem"}}>
      <ProductMenu />
      <ProductGrid />
    </div>
  )
}

export default Products;
