import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../functions/Products/cardSlice";
import { getAllProducts } from "../../functions/Products/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";

export default function ProductsList() {
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
