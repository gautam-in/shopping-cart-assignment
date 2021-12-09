import React from "react";
import Image from "components/HtmlElements/Image";

import "./ProductTile.scss";

export default function ProductTile({ product, onClickBuy }) {
  const { name, imageURL, description, price, id } = product;
  return (
    <div className="ProductTile">
      <h5>{name}</h5>
      <Image src={imageURL} />
      <p className="ProductTile__description">{description}</p>
      <div className="ProductTile__buyNow-container">
        <p className="ProductTile__price">{`MRP Rs. ${price}`}</p>
        <button
          className="ProductTile__buyNow"
          onClick={() => onClickBuy(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
