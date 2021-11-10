import React from 'react';
import useFetch from '../../hooks/useFetch';

import CategoryCard from './CategoryCard';

const CategoryList = () => {
  const [data, loading, error] = useFetch('../server/categories/index.get.json');

  return (
    <div className='category-list' style={{}}>
      {loading ? (
        <h1>Loading</h1>
      ): error ? (
        <h1>Error occured</h1>
      ): (
        data && data.map((el,index) => (
          <CategoryCard key={el.id} data={el} id={index} />
        ))
      )}
    </div>
  );
};

export default CategoryList;

    