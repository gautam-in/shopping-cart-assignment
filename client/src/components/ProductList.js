import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../redux";
import { fetchProduct } from "../redux";
import ProductCard from "./ProductCard";
import "../styles/productList.scss";
import { useParams } from "react-router-dom";


export default function ProductList() {
  const  {id}  = useParams();
  const products = useSelector((state) => state.product.product);
 
   const filteredProducts = products.filter((product) => {
        if (product.category === id)
            return product
    })
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // since if someone clicks on buy now button we still need to calculate the total
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);

  return (
    <div className="product-container">
  
      {filteredProducts.length > 0 ?
        filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      :
      products.length &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}