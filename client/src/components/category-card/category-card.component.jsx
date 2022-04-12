import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../button/button.component';
import { setCurrentCategory } from '../../store/categories/categories.actions';

import {
  CategoryContainer,
  CategoryDetail,
  CategoryTitle,
} from './category-card.styles';

const CategoryCard = ({ name, id, index, imageUrl, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    dispatch(setCurrentCategory(id));
    navigate(`/products/${id}`);
  };
  return (
    <CategoryContainer index={index}>
      <img
        src={imageUrl || './static/images/category/category_placeholder.png'}
        alt={`${name}`}
      />
      <CategoryDetail className="category-detail">
        <CategoryTitle>{name}</CategoryTitle>
        <p>{description}</p>
        <Button
          onClick={handleCategoryClick}
          width="fit-content"
          margin="0 auto"
          buttonType="inverted"
        >
          Explore {name}
        </Button>
        {/* <Link to={`/categories/${name}`}> </Link> */}
      </CategoryDetail>
    </CategoryContainer>
  );
};

export default CategoryCard;
