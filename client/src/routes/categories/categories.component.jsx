import React from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const { category } = useParams();
  console.log({ category });
  return <div>Categories - {category}</div>;
};

export default Categories;
