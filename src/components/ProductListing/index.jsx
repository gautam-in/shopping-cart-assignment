import React, { Component } from "react";
import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";
import "./ProductListing.scss";

class ProductListing extends Component {
  render() {
    const { products, categories, categoryId } = this.props;
    let filteredProducts;
    if (categoryId) {
      filteredProducts = products.filter(
        (product) => product.category === categoryId
      );
    } else {
      filteredProducts = products;
    }

    return (
      <section className="product-listing">
        <div className="category-filter">
          <CategoriesBar categoryId={categoryId} categories={categories} />
        </div>
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductListing;
