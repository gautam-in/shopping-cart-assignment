import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchCategoriesDataRequest, fetchProductsDataRequest } from '../../../redux/actions';
import ProductFilter from '../../organisms/ProductFilter';
import ProductList from '../../organisms/ProductList';

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
      <section className='page-wrapper'>
        <ProductFilter filterId={filterId} />
        <ProductList filterId={filterId} />
      </section>
    </main>
  );
};

export default Products;
