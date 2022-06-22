import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListingPage from "../../pages/ProductListingPage/ProductListingPage";

const ProductView = () => {
  return (
    <Routes>
      <Route index element={<ProductListingPage />} />
      <Route path=":categoryId" element={<ProductListingPage />} />
    </Routes>
  );
};

export default ProductView;
