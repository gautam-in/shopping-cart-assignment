import React from "react";
import "./producttile.styles.scss";

function ProductTile(props) {
  const { imageURL, description, name, quantity, price } = props.product;
  const { product, reduceItems, addItems } = props;
  return (
    <div className="product-tile">
      <img
        className="item-img"
        src={`${process.env.PUBLIC_URL}${imageURL}`}
        alt={`${description}`}
      />
      <div>
        <h3>{name}</h3>
        <div className="item-container">
          <div className="itemQuantity-container">
            <div className="addItem-icon" onClick={() => reduceItems(product)}>
              &#10134;
            </div>
            <div>{quantity}</div>
            <div className="addItem-icon" onClick={() => addItems(product)}>
              &#10133;
            </div>
          </div>
          <div className="itemPrice-container">
            <div>&#10005;</div>
            <div> {price} </div>
          </div>
          <div className="price-container">
            <div> {price * quantity} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
