import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Category from '../Category/Category';

import { fetchCategories } from './../../redux/Home/actions';

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(state => state.home.categories);

  return (
    <CategoriesWrapper>
      {categories.length > 0 && categories.map(category => <Category key={category.id} category={category} /> )}
    </CategoriesWrapper>
  );
}

export default Categories;