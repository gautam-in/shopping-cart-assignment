import React from "react";
import { useDispatch } from "react-redux";

import { CartActions } from "../store/cart-slice";

function Cartproduct({
  productName,
  productPrice,
  quantity,
  totalPrice,
  imageURL,
  id,
}) {
  let dispatch = useDispatch();

  let removeProduct = (
    productName,
    productPrice,
    quantity,
    totalPrice,
    imageURL,
    id
  ) => {
    quantity--;
    totalPrice -= productPrice;

    let metd = quantity === 0 ? "DELETE" : "PUT";
    let prdBody =
      quantity === 0
        ? null
        : JSON.stringify({
            productName,
            productPrice,
            quantity,
            totalPrice,
            imageURL,
            id,
          });

    fetch("http://localhost:5000/userCart/" + id, {
      // Adding method type
      method: metd,

      // Adding body or contents to send
      body: prdBody,

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        dispatch(CartActions.removeProduct(id));
      });
  };

  let addProduct = (
    productName,
    productPrice,
    quantity,
    totalPrice,
    imageURL,
    id
  ) => {
    quantity++;
    totalPrice += productPrice;

    fetch("http://localhost:5000/userCart/" + id, {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({
        productName,
        productPrice,
        quantity,
        totalPrice,
        imageURL,
        id,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        dispatch(CartActions.addProduct(json));
      });
  };

  return (
    <div className="cart-contents">
      <img src={imageURL}></img>
      <div className="cart-product-details">
        <h3>{productName}</h3>
        <div className="cart-count-buttons">
          <button
            onClick={() => {
              addProduct(
                productName,
                productPrice,
                quantity,
                totalPrice,
                imageURL,
                id
              );
            }}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              dispatch(() =>
                removeProduct(
                  productName,
                  productPrice,
                  quantity,
                  totalPrice,
                  imageURL,
                  id
                )
              );
            }}
          >
            -
          </button>
          <p>X {productPrice}</p>
        </div>
      </div>
      <p className="total-price">Rs. {totalPrice}</p>
    </div>
  );
}

export default Cartproduct;
