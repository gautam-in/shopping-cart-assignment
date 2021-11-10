import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductItem from './ProductItem';
import './ProductsGrid.scss';

import { useCategory } from '../../hooks/useCategory';
import useFetch from '../../hooks/useFetch';

const url = '../server/products/index.get.json';

const ProductsGrid = () => {
  const { pathname } = useLocation();
  
  const [products, setProducts] = useState([]);

  const [data, loading, error] = useFetch(url);

  const {activeCategory,setActiveCategory} = useCategory();

  useEffect(() => {
    if(activeCategory && data) {
      const filtered = data.filter(product => product.category == activeCategory);
      setProducts(filtered);
    } else {
      setProducts(data ? data : []);
    }
  }, [activeCategory, data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    
  return (
        
    <div className='product-list p__container'>
      {products.length == 0 ? (
        <div className="no-data">
          <h1>No Items</h1>
        </div>) : (
        products && products.map(product => {
          return (
            <ProductItem key ={product.id} product={product} />
          );
        }))}
    </div>
  );
};
 
export default ProductsGrid;