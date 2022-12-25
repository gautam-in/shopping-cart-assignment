import React from 'react'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import { CategoryMenu } from './CategoryMenu';

import './CategorySideNav.scss'

export const CategorySideNavView = (props) => {
  const { categoryList, onCategoryClick } = props;
  const [selectedCategory, setSelectedCategory] = useState({});
  const handleSelect = (category) => {
    onCategoryClick(category.id)
    setSelectedCategory(category)
  }

  return (
    <>
      <CategoryMenu categoryList={categoryList} onCategoryClick={onCategoryClick} handleSelect={handleSelect} selectedCategory={selectedCategory} className="d-flex d-md-none" />
      <ListGroup className='side-nav grey-bg d-none d-md-flex'>
        {categoryList.map(category => <span key={category.id.toString()}>{category.enabled ? (
          <NavLink
            to={`/products/${category.id}`}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            onClick={() => handleSelect(category)}
          >
            <ListGroup.Item>
              {category.name}
            </ListGroup.Item>
          </NavLink>
        )
          : ''
        }</span>)}
      </ListGroup>
    </>
  )
}




