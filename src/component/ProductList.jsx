import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProdductStart } from "../store/slices/products/products.action";
import { selectProductsList } from "../store/slices/products/products.selector";
import "../styles/product-list.scss";

const ProductList = ({ activeCategory }) => {
  const products = useSelector(selectProductsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdductStart());
  }, []);

  return (
    <div className="product__container">
      {products?.map((product) =>
        activeCategory === "all" || product.category === activeCategory ? (
          <ProductCard key={product.id} product={product} />
        ) : null
      )}
    </div>
  );
};
export default ProductList;
