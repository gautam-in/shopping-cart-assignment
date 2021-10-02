import React, { useContext } from "react";
import { GlobalAppContext } from "../../Context/GlobalAppContext";
import { useMediaQuery } from "../utility/useMediaQuery";


export default function Card({ name, imageUrl, price, stock, text, id }) {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const {
    dispatch,
    cartItems: { products },
  } = useContext(GlobalAppContext);

  function addItemToCart() {
    if (!products[id]) {
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  }

  return (
    <section className="card-container">
      <h2 className="card-container-title">{name}</h2>
      <figure className="card-container-image">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className={"product-image"}
        />
      </figure>
      <p className="card-container-text" title={text}>
        {text}
      </p>
      <section className="card-container-section">
        {browserWidth ? (
          <>
            <p className="card-container-section-price">MRP Rs.{price}</p>
            <button
              onClick={() => addItemToCart()}
              className={"card-container-section-button"}
            >
              Buy Now
            </button>
          </>
        ) : (
          <button
            onClick={() => addItemToCart()}
            className={"card-container-section-button"}
          >
            Buy Now @ Rs.{price}
          </button>
        )}
      </section>
    </section>
  );
}
