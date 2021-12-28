import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../ProductItem/ProductItem';

import { fetchProducts } from './../../redux/Products/actions';

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  background-color: #fff;
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <ProductsWrapper>
      {products && products.map(product => <ProductItem key={product.id} item={product} />)}
    </ProductsWrapper>
  );
}

export default Products;