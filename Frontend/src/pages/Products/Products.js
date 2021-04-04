import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchProductsDataRequest} from '../../actions/action';
import ProductFilter from './ProductFilter';
import ProductsList from './ProductsList';
import './Products.scss';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsDataRequest());
  }, [dispatch]);

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="product-page-main">
          <div className="product-filter-wrap">
            <ProductFilter />
          </div>
          <div className="product-page-list-wrap">
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
