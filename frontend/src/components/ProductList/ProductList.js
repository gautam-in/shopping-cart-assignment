import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../features/products/cartSlice";
import { getAllProducts } from "../../features/products/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

export default function ProductList() {
  const products = useSelector(getAllProducts);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // since if someone clicks on buy now button we still need to calculate the total
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
