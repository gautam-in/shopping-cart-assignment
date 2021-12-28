import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductItem from '../ProductItem/ProductItem';

import { fetchProducts } from './../../redux/Products/actions';
import { selectProducts } from './../../redux/Products/selectors';

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  background-color: #fff;
`;

const Products = () => {
  const dispatch = useDispatch();
  const { filterId } = useParams();
  console.log(filterId)
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts(filterId));
  }, [dispatch]);
  return (
    <ProductsWrapper>
      {products && products.map(product => (
        <ProductItem key={product.id} item={product} />
      ))}
    </ProductsWrapper>
  );
}

export default Products;