import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/cartSlice";
import "./ProductCard.scss";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="product-card">
      <div className="product-name">
        <h2>{product.name}</h2>
      </div>

      <div className="product-description">
        <div className="product-logo">
          <img src={`http://127.0.0.1:5000/${product.imageURL}`} alt="" />
        </div>
        <div className="product-details">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product-price">
        <div>
          <h4>MRP Rs.{product.price}</h4>
        </div>
        <div className="button">
          <button type="submit" onClick={() => handleAddToCart(product)}>
            Buy Now <span>@ Rs{product.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
