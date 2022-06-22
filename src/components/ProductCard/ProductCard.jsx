import React from "react";
import Button from "../Button/Button";
import "../ProductCard/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-name">{product.name}</div>
      <div className="product-tablet">
        <div>
          <img className="product-image" src={product.imageURL} alt="product" />
        </div>
        <div className="product-description">{product.description}</div>
      </div>
      <div className="product-price-button-container">
        <div className="product-price">Rs{product.price}</div>
        <Button type="sign">
          Buy now
          <span
            className="product-card-price--mobile"
            style={{ color: "white" }}
          >
            @ Rs 187
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
