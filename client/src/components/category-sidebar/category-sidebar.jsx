import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentCategory } from '../../store/categories/categories.actions';
import {
  CategoryLink,
  CategorySidebarContainer,
} from './category-sidebar.styles';

const ProductListingSidebar = ({ categories }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    dispatch(setCurrentCategory(categoryId));
    navigate(`/products/${categoryId}`);
  };

  return (
    <CategorySidebarContainer>
      {categories.map((category) => (
        <CategoryLink
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </CategoryLink>
      ))}
    </CategorySidebarContainer>
  );
};

export default ProductListingSidebar;
