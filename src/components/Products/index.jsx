import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { sortCallback } from '../../utils/common';
import useResources from '../../hooks/useResources';
import { cartActions } from '../../redux/reducers/miniCart';
import { productActions } from '../../redux/reducers/products';

import ProductPage from './ProductPage';
import WEB_PATH from '../../routes/webPath';

export default function Products() {
  const history = useHistory();
  const dispatch = useDispatch();
  const filteredCategory = React.useMemo(() => new URLSearchParams(history.location.search).get('q') || '');

  const products = useSelector((state) => state.products);
  const categories = useResources('categories').sort(sortCallback('order'));

  const fetchProducts = React.useCallback((category) => {
    dispatch(productActions.productList(category));
  }, [dispatch]);

  const onCategoryChange = React.useCallback((category, currentCategory) => {
    if (currentCategory !== category) {
      history.push({
        pathname: WEB_PATH.PRODUCTS,
        search: `?q=${category}`,
      });
    } else {
      history.push({
        pathname: WEB_PATH.PRODUCTS,
      });
    }
  }, [history.push]);

  React.useEffect(() => {
    fetchProducts(filteredCategory);
  }, [fetchProducts, filteredCategory]);

  return (
    <ProductPage
      categories={categories}
      products={products}
      onCategoryChange={onCategoryChange}
      filteredCategory={filteredCategory}
      addToCart={(item) => dispatch(cartActions.addToCart(item))}
    />
  );
}
