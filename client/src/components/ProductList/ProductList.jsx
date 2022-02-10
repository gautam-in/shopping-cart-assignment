import React, { useEffect } from "react";
import "./ProductList.css";
import ProductCard from "./../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "./../../redux/slices/cartSlice";
import { getAllProducts } from "./../../redux/slices/productSlice";

function ProductList() {
  const products = useSelector(getAllProducts);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);

  return (
    <div className="product-container">
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

export default ProductList;
