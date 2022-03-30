import React from "react";
import ProductCard from "../product-card/product-card";
import "./products-list.styles.css";

const ProductList = ({ products }) => {
  return (
    <div className="products-list">
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
