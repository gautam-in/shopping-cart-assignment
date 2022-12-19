import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCategories, loadProducts } from "../../../store/entities/items";
import Footer from "../../common/footer/footer";
import CategoriesSection from "../categoriesSection/categoriesSection";
import ProductsSection from "../productsSection/productsSection";
import "./productPage.scss";

function ProductPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, []);
  return (
    <div className="productContainer">
      <CategoriesSection />
      <ProductsSection />
    </div>
  );
}

export default ProductPage;
