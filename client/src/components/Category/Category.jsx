import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ItemCard,
  ImageContainer,
  Description,
  CustomButton
} from './styles';

const Category = ({ category }) => {
  const { name, description, key, imageUrl, dir } = category;
  const navigate = useNavigate();
  return (
    <ItemCard dir={dir}>
      <ImageContainer>
        <img src={imageUrl} alt={`${name} category`} />
      </ImageContainer>
      <Description>
        <h3>{name}</h3>
        <p>{description}</p>
        <CustomButton
          onClick={() => navigate(`/products/${key}`)}
          type="button"
          aria-label={`Explore ${key}`}>
          {`Explore ${key}`}
        </CustomButton>
      </Description>
    </ItemCard>
  );
}

export default Category;