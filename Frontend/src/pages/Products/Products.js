import {useEffect, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import ProductFilter from './ProductFilter';
import ProductsList from './ProductsList';
import './Products.scss';

const Products = () => {
  const {
    state: {id},
  } = useLocation();
  const [filterId, setFilterId] = useState(null);

  useEffect(() => {
    setFilterId(id);
  }, [id]);

  const productFilterId = useCallback((productId) => {
    setFilterId(productId);
  }, []);

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="product-page-main">
          <div className="product-filter-wrap">
            <ProductFilter filterId={filterId} setFilterId={productFilterId} />
          </div>
          <div className="product-page-list-wrap">
            <ProductsList filterId={filterId} setFilterId={productFilterId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
