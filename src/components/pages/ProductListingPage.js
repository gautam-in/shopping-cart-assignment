import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../redux/actions/actionCreators';
import ProductList from '../organisms/ProductList/ProductList';
import CategoryFilter from '../organisms/CategoryFilter/CategoryFilter';
const ProductListingPage = () => {

  const dispatch = useDispatch();
  const { state } = useLocation();
  const id = (state && state.id) || null;
  const [filterId, setFilterId] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilterId(id);
  }, [id]);
  return (<>
    <main className='container'>
      <section className='container-section'>
        <CategoryFilter filterId={filterId} />
        <ProductList filterId={filterId} />
      </section>
    </main>
  </>)
}

export default ProductListingPage;