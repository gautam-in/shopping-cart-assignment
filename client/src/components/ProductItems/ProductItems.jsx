import React from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import classes from "./ProductItem.module.css";

const Productitems = ({ products }) => {
  return (
    <div className={classes.product_container}>
      {products.map((currentProduct) => (
        <Card key={currentProduct.id} currentProduct={currentProduct} />
      ))}
      <Footer />
    </div>
  );
};

export default Productitems;
