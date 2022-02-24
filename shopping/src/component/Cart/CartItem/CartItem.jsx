import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./cartItem.css";

function CartItem({ product }) {
  const contextData = useContext(cartContext);

  const addToCart = (product) => {
    contextData.addToCart(product);
  };
  const removeFromCart = (product) => {
    contextData.removeFromCart(product);
  };

  return (
    <div className="row-item">
      <div className="img-section">
        <img src={product.imageURL} alt="" />
      </div>
      <div className="text-section">
        <h4>{product.name}</h4>
        <div className="items-content">
          <button onClick={() => addToCart(product)}>
            {window.screen.width > 1024 ? (
              <FontAwesomeIcon icon={faPlusCircle} />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </button>
          <span className="quantity">{product.quantity}</span>
          <button onClick={() => removeFromCart(product)}>
            {window.screen.width > 1024 ? (
              <FontAwesomeIcon icon={faPlusCircle} />
            ) : (
              <FontAwesomeIcon icon={faMinusSquare} />
            )}
          </button>
          <span> * {product.price}</span>
          <p>Rs.{product.price * product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
