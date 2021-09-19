import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Action/CartAction.js";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const handleBuyNow = (prodId, price) => {
    dispatch(
      addItemToCart({
        id: prodId,
        quantity: 0,
        price: price,
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
        <div className="product-description">{product.description}</div>
      </div>
      <div className="price-details">
        <div className="mrp">MRP Rs {product.price}</div>
        <button
          type="button"
          className="buy-button"
          onClick={() => handleBuyNow(product.id, product.price)}
          tabIndex={0}
          onKeyPress={() => handleBuyNow(product.id, product.price)}
        >
          Buy Now <span className="buy-now-price"> @ Rs.{product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
