import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

import { CategoryContainer, CategoryDetail } from './category-card.styles';

const CategoryCard = ({ name, id, index, imageUrl, description }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };
  return (
    <CategoryContainer index={index}>
      <img
        src={imageUrl || './static/images/category/category_placeholder.png'}
        alt=""
      />
      <CategoryDetail className="category-detail">
        <h2>{name}</h2>
        <p>{description}</p>
        <Button
          onClick={() => handleCategoryClick(name)}
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
