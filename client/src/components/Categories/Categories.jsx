import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Category from '../Category/Category';

import { selectCategories } from './../../redux/Home/selectors';

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Categories = () => {
  const categories = useSelector(selectCategories);
  return (
    <CategoriesWrapper>
      {categories.length > 0 && (
        categories.map(category => <Category key={category.id} category={category} /> 
      ))}
    </CategoriesWrapper>
  );
}

export default Categories;