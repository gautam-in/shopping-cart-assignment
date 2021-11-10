import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import Layout from '../../components/Layout';
import CategoryList from './CategoryList';
import CategoryDropdown from './CategoryDropdown';
import ProductsGrid from './ProductsGrid';

const url = '../server/categories/index.get.json';

const Store = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [categories, loading,error] = useFetch(url);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
  return ( 
    <Layout title="Store" description="This is the product listing page" >
      <section>
        <div className='product-listing' style={{'display': 'flex'}}>
          {width >= 768 ? (
            <>
              <CategoryList data={categories}/>
              <ProductsGrid />
            </>
          ) : (
            <>
              <CategoryDropdown data={categories}/>
              <ProductsGrid />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};
 
export default Store;