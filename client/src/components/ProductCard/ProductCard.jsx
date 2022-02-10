import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/slices/cartSlice";
import "./ProductCard.css";
import { axiosInstance } from "./../../services/index";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    axiosInstance
      .post(
        "/addToCart",
        { id: product.id },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then(({ data }) => {
        if (data.response === "Success") {
          dispatch(addToCart(product));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="product-card">
      <div className="product-name">
        <h2>{product.name}</h2>
      </div>

      <div className="product-description">
        <div className="product-logo">
          <img src={`${product.imageURL}`} alt="" />
        </div>
        <div className="product-details">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product-price">
        <div>
          <h4>MRP Rs.{product.price}</h4>
        </div>
        <div className="product-button">
          <button type="submit" onClick={() => handleAddToCart(product)}>
            Buy Now <span>&nbsp;@Rs.{product.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
