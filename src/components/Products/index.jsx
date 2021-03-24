import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import axios from '../../utils/axiosConfig';
import { sortCallback } from '../../utils/common';
import { cartActions } from '../../redux/reducers/miniCart';
import useResources from '../../hooks/useResources';

import ProductPage from './ProductPage';
import WEB_PATH from '../../routes/webPath';

export default function Products() {
  const history = useHistory();
  const dispatch = useDispatch();
  const filteredCategory = React.useMemo(() => new URLSearchParams(history.location.search).get('q') || '');
  const [products, setProducts] = React.useState([]);
  const categories = useResources('categories').sort(sortCallback('order'));

  const fetchProducts = React.useCallback((category) => {
    const params = category ? {
      params: {
        category,
      },
    } : {};
    axios.get('/products', params)
      .then((r) => {
        let response = r.data || [];
        if (category) {
          response = response.filter((v) => (v.category === category));
        }
        setProducts(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
