import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../redux/actions/actionCreators';
const ProductList = React.lazy(() => import('../organisms/ProductList/ProductList'));
const CategoryFilter = React.lazy(() => import('../organisms/CategoryFilter/CategoryFilter'));
const ProductListingPage = React.memo(() => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [filterId, setFilterId] = useState(null);
  const searchParams = new URLSearchParams(search);
  const categorySelected = searchParams.get('category');
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilterId(categorySelected);
  }, [categorySelected]);
  return (
    <>
      <main className='container'>
        <section className='container-section'>
          <CategoryFilter filterId={filterId} />
          <ProductList filterId={filterId} />
        </section>
      </main>
    </>
  );
});

export default ProductListingPage;
