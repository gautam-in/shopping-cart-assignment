import React from "react";
import "./ProductCard.scss";
import { useWindowSize } from "../utils";

const ProductCard = (props) => {
  const size = useWindowSize();
  return (
    <div className="productCardContainer">
      <h2>{props.title}</h2>
      <div className="subContainer">
        <div className="leftCardContainer">
          <img src={props.src} alt={props.title} />
        </div>
        <div className="rightCardContainer">
          <p>{props.description.substring(0, 112)}</p>
          {size.width <= 750 && (
            <button onClick={props.buyNowHandler}>
              Buy Now MRP @ Rs.{props.price}
            </button>
          )}
        </div>
      </div>
      {size.width > 750 && (
        <div className="priceContainer">
          {size.width >= 991 && <div>MRS Rs.{props.price}</div>}
          <button onClick={props.buyNowHandler}>
            <span>Buy Now</span>
            {size.width <= 991 && size.width >= 750 && (
              <span> @ Rs.{props.price}</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
