import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsComponent from './productsComponent';
import { productsActions } from './redux/actions';
import { productsSelectors } from './redux/selectors';

function ProductsContainer() {
  const productsData = useSelector(productsSelectors.getProductsSelectors.selectProductsData);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getProductsAction.getProductsLoading());
  }, [dispatch]);

  return (
    <div>
      <ProductsComponent productsData={productsData} />
    </div>
  );
}

export default ProductsContainer;
