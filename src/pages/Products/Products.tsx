import React from "react";
import { Outlet } from "react-router-dom";
import { ProductMenu } from "../../components/ProductMenu/ProductMenu";
import { ProductMenuMobile } from "../../components/ProductMenuMobile/ProductMenuMobile";
import { useViewport } from "../../hooks/useViewport";
import "./Products.scss";

export const Products = () => {
  const windowWidth = useViewport();

  return (
    <div className="products">
      {windowWidth > 478 ? <ProductMenu /> : <ProductMenuMobile />}
      <Outlet />
    </div>
  )
}

export default Products;
