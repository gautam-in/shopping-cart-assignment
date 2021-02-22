import React from "react";

import Card from "../UI/Card/Card";
import Classes from "./Products.css";

const Products = ({ products, addToCartHandler }) => {
  return (
    <div className={Classes.ProductsWrapper}>
      {products &&
        products.length > 0 &&
        products.map((item) => {
          return <Card addToCartHandler={addToCartHandler} data={item} key={item.id} />;
        })}
    </div>
  );
};
export default Products;
