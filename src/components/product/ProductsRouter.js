import { Routes, Route } from "react-router-dom";
import AllProductList from "./AllProductList";
import FilteredProductList from "./FilteredProductList";

const ProductsRouter = () => {
  return (
    <Routes>
      <Route index element={<AllProductList />} />
      <Route path=":categoryId" element={<FilteredProductList />} />
    </Routes>
  );
};

export default ProductsRouter;
