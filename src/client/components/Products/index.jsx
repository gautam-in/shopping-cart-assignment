import React, { useMemo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import cartActions from '../../redux/actions/miniCart';
import productActions from '../../redux/actions/product';
import categoryAction from '../../redux/actions/category';

import ProductPage from './ProductPage';
import WEB_PATH from '../../constants/webPath';

export const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const filteredCategory = useMemo(() => new URLSearchParams(history.location.search).get('q') || '');

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const fetchProducts = useCallback((category) => {
    dispatch(productActions.productList(category));
  }, [dispatch]);

  const onCategoryChange = useCallback((category, currentCategory) => {
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

  useEffect(() => {
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
};

export default {
  component: Products,
  loadData: ({ dispatch }) => (async () => {
    await dispatch(categoryAction.categoryList());
    await dispatch(productActions.productList());
  })(),
};
