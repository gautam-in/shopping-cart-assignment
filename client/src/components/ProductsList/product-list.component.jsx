import React from 'react';
import ProductCard from '../product-card/product-card.component';

import { ProductListContainer } from './product-list.styles';

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.length ? (
        products?.map((product) => <ProductCard product={product} />)
      ) : (
        <h2>No Products to display. Please try other categories.</h2>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
