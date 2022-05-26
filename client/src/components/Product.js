import React from "react";

import "./product.css";

import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../store/cart-slice";

import Notification from "./Notification";

function Product({ pname, imageURL, description, price, id }) {
  let dispatch = useDispatch();
  let isLoggedin = useSelector((state) => state.loginSlice.isLoggedin);

  imageURL = "http://localhost:8080" + imageURL;

  let updateCart = (productName, productPrice, id) => {
    if (!isLoggedin) {
      alert("pleae login to add products to cart!");
      return;
    }

    fetch("http://localhost:5000/userCart?id=" + id)
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        if (json.length > 0) {
          let updateProduct = json.filter((data) => data.id === id);
          if (updateProduct) {
            postCartToServer(
              {
                productName,
                productPrice,
                quantity: updateProduct[0].quantity + 1,
                totalPrice: updateProduct[0].totalPrice + productPrice,
                imageURL,
              },
              id,
              "PUT"
            );
          }
        } else {
          postCartToServer(
            {
              productName,
              productPrice,
              quantity: 1,
              totalPrice: productPrice,
              imageURL,
              id,
            },
            "",
            "POST"
          );
        }
      })
      .catch((error) => console.log(error));
  };

  let postCartToServer = (
    methodBody,
    id,

    methodType
  ) => {
    fetch("http://localhost:5000/userCart/" + id, {
      // Adding method type
      method: methodType,

      // Adding body or contents to send
      body: JSON.stringify(methodBody),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => dispatch(CartActions.addProduct(json)));
  };

  return (
    <section className="product">
      <h3>{pname}</h3>
      <img src={imageURL}></img>
      <p>{description}</p>
      <div className="mrp-button">
        <h5>MRP Rs {price} </h5>
        <button
          onClick={() => {
            updateCart(pname, price, id);
          }}
        >
          Buy Now
        </button>
      </div>
      <Notification></Notification>
    </section>
  );
}

export default Product;
