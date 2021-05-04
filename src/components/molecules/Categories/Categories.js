import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryCard from '../../atoms/CategoryCard';
import { fetchCategoriesDataRequest } from '../../../redux/actions';
import { allCategoriesData } from '../../../redux/selector';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => allCategoriesData(state));

  const categoriesList = data.map((category) => {
    return <CategoryCard key={category.id} category={category} />;
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  return <ul>{categoriesList}</ul>;
};

export default Categories;
