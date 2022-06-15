import React, { Component } from "react";
import "../css/style.css";

class ProductCard extends Component {
  render() {
    const { cardData } = { ...this.props };
    return (
      <div className="products__item" key={cardData.id}>
        <h3>{cardData.name}</h3>
        <img
          src={process.env.PUBLIC_URL + cardData.imageURL}
          alt={`${cardData.name} Image`}
        />
        <p>{cardData.description}</p>
        <span>{`MRP Rs.${cardData.price}`}</span>
        <button
          className="pointer"
          onClick={() => this.props.addToCart(cardData)}
        >
          Buy Now
        </button>
      </div>
    );
  }
}

export default ProductCard;
