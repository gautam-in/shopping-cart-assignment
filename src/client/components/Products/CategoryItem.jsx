import React from 'react';

const CategoryItem = ({ category, filteredCategory, onCategoryChange }) => (
  <button
    type="button"
    tabIndex={0}
    role="menuitem"
    className={`product-categories__item${filteredCategory === category.id ? ' active' : ''}`}
    onClick={() => onCategoryChange(category.id, filteredCategory)}
  >
    {category.name}
  </button>
);

export default CategoryItem;
