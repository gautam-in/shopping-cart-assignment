import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../../components/Card';
import { allProductsData } from '../../../selector';
import { createAddToCartRequest } from '../../../actions';
import './ProductList.scss';

const ProductList = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => allProductsData(state));

  const addCart = (product) => {
    dispatch(createAddToCartRequest({ ...product, quantity: 1 }));
  };

  const productList = data.map((product) => {
    const { id } = product;
    return (
      <li key={id}>
        <Card product={product} addCart={addCart} />
      </li>
    );
  });
  return (
    <div className='product-list-wrap'>
      {loading && <h1>Loading....</h1>}
      {!!data && data.length && <ul className='clearfix'>{productList}</ul>}
      {error && <h1>Something went wrong!</h1>}
    </div>
  );
};

export default ProductList;
