import {useEffect, useState} from 'react';
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

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="product-page-main">
          <div className="product-filter-wrap">
            <ProductFilter filterId={filterId} />
          </div>
          <div className="product-page-list-wrap">
            <ProductsList filterId={filterId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
