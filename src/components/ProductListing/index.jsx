import React, { Component } from "react";
import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";
import "./ProductListing.scss";

class ProductListing extends Component {
  render() {
    const { products, categories } = this.props;
    return (
      <section className="product-listing">
        <div className="category-filter">
          <CategoriesBar categories={categories} />
        </div>
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductListing;
