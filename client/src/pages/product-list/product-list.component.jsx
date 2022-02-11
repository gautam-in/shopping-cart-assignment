import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import Products from '../../components/product/product.component';
import SideNav from '../../components/side-nav/side-nav.component';
import PRODUCTS from '../../server/products/index.get.json';

import './product-list.styles.scss';

const ProductList = ({ match }) => {
  const [selectedProducts, setSelectedProducts] = useState(PRODUCTS);

  useEffect(() => {
    // Filter the products that match the selected category
    match.params.productId !== undefined &&
      setSelectedProducts(
        PRODUCTS.filter(
          (product) => match.params.productId === product.category
        )
      );
  }, []);

  return (
    <div className="product-page">
      <div className="side-nav">
        <SideNav selectedCategory={match.params.productId} />
      </div>
      <div className="product-container">
        {selectedProducts.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(ProductList);
