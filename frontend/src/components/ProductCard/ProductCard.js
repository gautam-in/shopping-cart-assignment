import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import LoginMessage from "../LoginMessage/LoginMessage";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  const handleAddToCart = (product) => {
    if(user.payload)
      dispatch(addToCart(product)) 
    else
      setClicked(true)
  };
  const [clicked, setClicked]= useState(false)
  return (
    <div className="product-card">
      <div className="product-name">
        <h2>{product.name}</h2>
      </div>

      <div className="product-description">
        <div className="product-logo">
          <img src={product.imageURL} alt="" />
        </div>
        <div className="product-details">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product-price">
        <div>
          <h4>MRP Rs.{product.price}</h4>
        </div>
        <div className="buy-button">
          <button type="submit" onClick={() => handleAddToCart(product)}>
            Buy Now <span>@ Rs{product.price}</span>
          </button>
        </div>
        {clicked && <LoginMessage clicked={clicked} setClicked={setClicked}/>}
      </div>
    </div>
  );
}