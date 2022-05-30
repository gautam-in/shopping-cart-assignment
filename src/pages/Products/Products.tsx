import React from "react";
import { Outlet } from "react-router-dom";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { ProductMenu } from "../../components/ProductMenu/ProductMenu";
import "./Products.scss";

export const Products = () => {
  return (
    <div className="products">
      <ProductMenu />
      <Outlet />
    </div>
  )
}

export default Products;
