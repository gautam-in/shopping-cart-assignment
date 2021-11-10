import React from 'react';

import { useCategory } from '../../hooks/useCategory';

import './CategoryDropdown.scss';

const CategoryDropdown = ({data}) => {
  const {activeCategory,setActiveCategory} = useCategory();

  const onChange = (id) => {
    setActiveCategory(id);
  };
    
  return (
    <div className='category-dropdown'>
      <select
        className="select"
        value={activeCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" className="active">
                All Category
        </option>
        {data && data.map((item) => (
          <option
            className="option"
            value={item.id}
            key={item.id}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;