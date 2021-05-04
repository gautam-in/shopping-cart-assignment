import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchCategoriesDataRequest, fetchProductsDataRequest } from '../../../redux/actions';
import ProductFilter from '../../molecules/ProductFilter';

const Products = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const id = (state && state.id) || null;
  const [filterId, setFilterId] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsDataRequest());
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setFilterId(id);
  }, [id]);

  return (
    <main className='container'>
      <div className='page-wrapper'>
        <ProductFilter filterId={filterId} />
      </div>
    </main>
  );
};

export default Products;
