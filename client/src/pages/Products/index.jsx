import CategoryListingSideBar from "components/CategoryListingSideBar";
import { connect } from "react-redux";
import React, { useEffect } from "react";

import "./Products.scss";
import { initiateGetProducts } from "redux/modules/products";
import ProductTile from "components/ProductTile";

function Products({ categories, initiateGetProducts, products }) {
  useEffect(() => {
    initiateGetProducts();
  }, []);
  console.log(products);
  return (
    <div className="Products">
      <div className="Products__category-container">
        <CategoryListingSideBar categories={categories} />
      </div>
      <div className="Products__container">
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default connect(
  ({ category: { categories }, products: { products } }) => ({
    categories,
    products,
  }),
  {
    initiateGetProducts,
  }
)(Products);
