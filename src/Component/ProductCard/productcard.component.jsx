import React from "react";
import "./productcard.styles.scss";
import Button from "../Button/button.component";

function ProductCard({ name, imgURL, desc, price, additem }) {
  const onClickBuy = () => {
    additem();
  };
  return (
    <div className="card-container">
      <h3>{name}</h3>
      <div className="thumbnail-container">
        <img
          className="product-img"
          src={`${process.env.PUBLIC_URL}${imgURL}`}
          alt={name}
        />
      </div>
      <div className="card-desc"> {desc} </div>
      <div className="footer-container">
        <div className="price-tag"> {price} </div>
        <Button text="Buy" onClick={onClickBuy} />
      </div>
    </div>
  );
}

export default ProductCard;
