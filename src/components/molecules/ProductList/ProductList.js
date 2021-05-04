import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from '../../atoms/ProductCard';
import { selectCartProductIds, allProductsData } from '../../../redux/selector';
import { createAddToCartRequest } from '../../../redux/actions';

const ProductList = React.memo(({ filterId }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const { loading, data, error } = useSelector((state) => allProductsData(state));

  const cartProduct = useSelector((state) => selectCartProductIds(state));

  const addCart = useCallback(
    (product) => {
      dispatch(createAddToCartRequest({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const productFilter = useCallback(() => {
    if (filterId) {
      const filterProducts = data.filter((product) => product.category === filterId.toString());
      setProducts(filterProducts);
    } else {
      setProducts(data);
    }
  }, [data, filterId]);

  useEffect(() => {
    productFilter();
  }, [productFilter]);

  const productList = products.map((product) => {
    const { id } = product;
    const disabled = !!cartProduct.includes(id);
    return <ProductCard key={id} product={{ ...product, disabled }} addCart={addCart} />;
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>SOmething went wrong!</h1>;
  }

  return <div className='flex-row'>{productList}</div>;
});

ProductList.propTypes = {
  filterId: PropTypes.string
};

ProductList.defaultProps = {
  filterId: null
};

export default ProductList;
