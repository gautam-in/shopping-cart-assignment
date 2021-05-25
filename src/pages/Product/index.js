import { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "store/home/homeSlice";
import { getProducts } from "store/product/productSlice";

import Sidebar from "components/Product/Sidebar";
import ProductView from "components/Product/ProductView";
import { Container } from "./Product.styles";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <Container>
      <Sidebar />
      <ProductView />
    </Container>
  );
};

export default memo(Product);
