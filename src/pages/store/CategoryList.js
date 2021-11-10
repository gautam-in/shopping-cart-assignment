import React from 'react';

import { useCategory } from '../../hooks/useCategory';

import './CategoryList.scss';

const CategoryList = ({data}) => {

  const {activeCategory,setActiveCategory} = useCategory();

  return (
    <ul className='categories-list'>
      {data && data.map(category => (
        <li className={category.id == activeCategory ? 'active' : ''} onClick={() => setActiveCategory(category.id)} key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>        
  );
};

export default CategoryList;