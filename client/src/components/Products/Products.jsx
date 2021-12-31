import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../ProductItem/ProductItem';

import { fetchProducts } from './../../redux/Products/actions';
import { selectProducts } from './../../redux/Products/selectors';

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  background-color: #fff;

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 90%;
    margin: 0 auto;
  }

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    align-content: flex-start;
  }
`;

const Products = ({ filterId }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts(filterId));
  }, [dispatch, filterId]);
  return (
    <ProductsWrapper>
      {products && products.map(product => (
        <ProductItem key={product.id} item={product} />
      ))}
    </ProductsWrapper>
  );
}

export default Products;