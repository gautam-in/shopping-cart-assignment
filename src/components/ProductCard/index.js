import React from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { updateCart } from "../../store/action";

export default function ProductCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <li className="product-cards" id={product.category}>
      <h2 className="product-name truncate">{product.name}</h2>
      <img src={product.imageURL} alt={product.name} className="product-img" />
      <p className="product-desc">{product.description}</p>
      <button
        className="btn-cta mobile tablet"
        onClick={() => {
          dispatch(updateCart(product));
        }}
      >
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button
          onClick={() => {
            dispatch(updateCart(product));
          }}
          className="btn-cta"
        >
          Buy Now
        </button>
      </div>
    </li>
  );
}
