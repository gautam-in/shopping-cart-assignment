import React from "react";
import Button from "../Button/Button";
import "../ProductCard/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-name">{product.name}</div>
      <div>
        <img className="product-image" src={product.imageURL} alt="product" />
      </div>
      <div className="product-description">{product.description}</div>
      <div className="product-price-button-container">
        <div className="product-price">MRP Rs{product.price}</div>
        <Button type="sm">Buy now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
