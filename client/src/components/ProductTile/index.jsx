import React from "react";
import Image from "components/HtmlElements/Image";

import "./ProductTile.scss";

export default function ProductTile({ product, onClickBuy }) {
  const { name, imageURL, description, price } = product;
  return (
    <div className="ProductTile">
      <h5>{name}</h5>
      <div className="ProductTile__info-image-container">
        <Image src={imageURL} />
        <div className="ProductTile__Info">
          <p className="ProductTile__description">{description}</p>
          <div className="ProductTile__buyNow-container">
            <p className="ProductTile__price">{`MRP Rs. ${price}`}</p>
            <button
              className="ProductTile__buyNow"
              onClick={() => onClickBuy(product)}
            >
              Buy Now <span>{`@ Rs. ${price}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
