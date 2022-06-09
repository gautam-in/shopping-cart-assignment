import React from "react";
import { Outlet } from "react-router-dom";
import { ProductMenu, ProductMenuMobile } from "../../components/index";
import { useViewport } from "../../hooks/useViewport";
import "./Products.scss";

const Products = () => {
  const windowWidth = useViewport();

  return (
    <div className="products">
      {windowWidth > 478 ? <ProductMenu /> : <ProductMenuMobile />}
      <Outlet />
    </div>
  )
}

export default Products;
