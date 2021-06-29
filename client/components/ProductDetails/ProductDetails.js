import React from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-title">{product.name}</div>
      <div className="product-details">
        <img
          className="product-image"
          src={product.imageURL}
          alt={product.name}
        />
        <div className="product-description">
          {product.description}
          {/* <button className="buy-button">Buy Now @ Rs.{product.price}</button> */}
        </div>
      </div>
      <div className="price-details">
        <div className="mrp">MRP Rs {product.price}</div>
        <button className="buy-button">
          Buy Now <span className="buy-now-price"> @ Rs.{product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
