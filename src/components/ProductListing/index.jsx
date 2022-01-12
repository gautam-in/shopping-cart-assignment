import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./ProductListing.scss";

class ProductListing extends Component {
  render() {
    const { products, categories } = this.props;
    return (
      <section className="product-listing">
        <div className="category-filter"></div>
        <div className="products">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductListing;
