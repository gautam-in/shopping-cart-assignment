import React from "react";
import MainNavigation from "../../components/MainNavigation";
import Products from "../../components/Products";
import classes from "./ProductsPage.module.css";
const ProductsPage = () => {
  return (
    <>
      <MainNavigation />
      <Products />
    </>
  );
};

export default ProductsPage;
