import { Routes, Route } from "react-router-dom";
import ProductsPage from "../component/ProductsPage";

import "../styles/products-view.scss";

const ProductView = () => {
  return (
    <Routes>
      <Route index element={<ProductsPage />} />
      <Route path=":categoryId" element={<ProductsPage />} />
    </Routes>
  );
};

export default ProductView;
