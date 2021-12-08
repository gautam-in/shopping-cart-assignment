import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cart";
import { ToastContainer, toast } from "react-toastify";

function Product({ product, cartItemCouter }) {
  const navigate = useNavigate();

  const { name, imageURL, description, price } = product;

  const addToCartHandler = () => {
    const isAdded = addToCart(product);
    if (isAdded) {
      cartItemCouter();
      toast("Added to cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="product">
      <h4>{name}</h4>
      <img src={`${window.location.origin}${imageURL}`} />
      <div className="product_lower_container">
        <small className="product_desc">{description}</small>
        <div className="product_buy_container">
          <p>MRP Rs.{price}</p>
          <button
            className="product_buy_btn"
            onClick={() => {
              addToCartHandler();
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Product;
