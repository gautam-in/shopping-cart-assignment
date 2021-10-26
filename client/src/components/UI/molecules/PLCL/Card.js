import "./Card.scss";
import { createAddToCartSuccess } from "../../../../redux/actions/index";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const Card = ({ product }) => {
  const { name, price, description, imageURL, sku } = product;
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const addToCart = (item) => {
    setDisable(true);
    dispatch(createAddToCartSuccess(item));
  };

  return (
    <div className="product-wrap">
      <div className="product-header-wrapper">
        <h4>{name}</h4>
      </div>
      <div className="product-detail-wrap">
        <img src={imageURL} alt={sku} />
        <div className="product-description">
          <p>{description}</p>
        </div>
        <div className="product-price-wrap">
          <div className="product-price">
            <span>MRP Rs.{price}</span>
          </div>
          <div className="product-buyout-btn">
            <button
              disabled={disable}
              type="button"
              onClick={() => addToCart(product)}
            >
              {disable ? "In Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
