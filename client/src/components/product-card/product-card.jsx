import React from "react";
import Button from "../button/button";
import "./product-card.styles.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import { BASE_URL } from "../../utilities/constants.js";

export const ProductCard = ({ product }) => {
  const { name, imageURL, description, price, id } = product;
  const dispatch = useDispatch();
  const buyNowHandler = async (productId) => {
    try {
      const response = await axios.post(BASE_URL + "addToCart");
      const { data } = response;
      if (data.response === "Success") {
        const cartProduct = {
          ...product,
          quantity: 1,
        };
        dispatch(addToCart(cartProduct));
        alert(data.responseMessage);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <div className="product-img-container">
        <img className="product-img" src={imageURL} alt={name} />
      </div>
      <div className="product-description">{description}</div>
      <div className="buy-now-box">
        <span className="product-price">MRP Rs.{price}</span>
        <Button
          onClick={() => buyNowHandler(id)}
          style={{ padding: "0 1rem 0 1rem" }}
          aria-label={`Add ${name} to cart`}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
