import React, { useEffect, useState } from 'react';
import {
  getProductFilteredByCategories,
  getProducts,
} from '../../services/ApiService';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../Utilities/ProductCard';
import { StyledProductListing } from './ProductListing.styled';
import { unwrapResult } from '@reduxjs/toolkit';

const ProductListing = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const selectedFilter = useSelector(
    (state) => state.productsFilter.selected_filter
  );

  useEffect(() => {
    dispatch(getProductFilteredByCategories({ category_id: categoryId || selectedFilter }))
      .then(unwrapResult)
      .then((productData) => {
        setProductList(productData);
      })
      .catch((error) => error);
  }, [dispatch, selectedFilter]);

  return (
    <StyledProductListing>
      {productList.map((product) => (
        <li key={product.id}>
          <ProductCard
            imageSrc={product.imageURL}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            productId={product.id}
          />
        </li>
      ))}
    </StyledProductListing>
  );
};

export default ProductListing;
