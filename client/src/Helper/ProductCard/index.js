import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Action/CartAction.js";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const handleBuyNow = (prodId) => {
    dispatch(
      addItemToCart({
        id: prodId,
        quantity: 0,
      })
    );
  };

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
        <button
          type="button"
          className="buy-button"
          onClick={() => handleBuyNow(product.id)}
          tabIndex={0}
          onKeyPress={() => handleBuyNow(product.id)}
        >
          Buy Now <span className="buy-now-price"> @ Rs.{product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;