import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts, loadCategories } from "../../../store/entities/items";
import CategoriesSection from "../categoriesSection/categoriesSection";
import ProductsSection from "../productsSection/productsSection";
import "./homePage.scss";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, []);
  return (
    <div className="homeContainer">
      <CategoriesSection />
      <ProductsSection />
    </div>
  );
}

export default HomePage;
