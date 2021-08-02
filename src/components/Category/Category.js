import React from 'react'
import { categoryLabel } from './Category.constants'
import { get } from 'lodash';

const Category = ({categories, handleCategoryChange, selectedCategory}) => {
  const { category } = categoryLabel;
  return (
    <>
    <ul className="category-list">  
        {categories.map((category) => {
            return (
              <li key={category.id} className={selectedCategory===category.id ? "category-active" : ""} onClick={() => {handleCategoryChange(category.id)}}>{category.name}</li>
            )
        })}
    </ul>
    <select
    value={selectedCategory}
    onChange={(e) => handleCategoryChange(e.target.value)}
    className="category-dropdown"
    >
    <option value="" disabled>
      {get(category, 'selectCategory')}
    </option>

    {categories.map((category) => (
      <option value={category.id} key={category.id}>
        {category.name}
      </option>
    ))}
    </select>
    </>
  )
}

export default Category