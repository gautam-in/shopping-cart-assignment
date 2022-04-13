import ProductsMap from "./ProductsMap";
import { useSelector } from "react-redux";

const AllProductList = () => {
  const productItems = useSelector((state) => state.products);

  return <ProductsMap products={productItems} />;
};

export default AllProductList;
