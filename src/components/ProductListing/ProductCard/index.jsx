import React, { Component } from "react";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    const image = require.context("../../..", true);
    const { product } = this.props;
    // TODO: ARIA labels
    return (
      <section className="product-card">
        <h1>{product.name}</h1>
        <img src={image(`.${product.imageURL}`)} alt={product.name} />
        <p className="product-description">{product.description}</p>
        <div className="CTA">
          <div className="price">MRP Rs.{product.price}</div>
          <button>
            Buy Now <span className="button-price">@Rs.{product.price}</span>
          </button>
        </div>
      </section>
    );
  }
}

export default ProductCard;
