import React from "react";
import CategoriesSection from "../categoriesSection/categoriesSection";
import ProductsSection from "../productsSection/productsSection";
import "./productPage.scss";

function ProductPage() {
  return (
    <div className="productContainer">
      <CategoriesSection />
      <ProductsSection />
    </div>
  );
}

export default ProductPage;
