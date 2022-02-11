import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PRODUCTS from '../../server/products/index.get.json';
import ProductList from '../product-list/product-list.component';
import './product-item.styles.scss';

const ProductItem = ({ match }) => {
  return <ProductList selectedCategory={match.params.productId} />;
};

export default withRouter(ProductItem);
