import React from 'react';

import {
  ItemCard,
  ImageContainer,
  Description,
  CustomButton
} from './styles';

const Category = ({ category }) => {
  const { name, description, key, imageUrl, dir } = category;
  return (
    <ItemCard dir={dir}>
      <ImageContainer>
        <img src={imageUrl} alt={`${name} category`} />
      </ImageContainer>
      <Description>
        <h3>{name}</h3>
        <p>{description}</p>
        <CustomButton
          type="button">
          {`Explore ${key}`}
        </CustomButton>
      </Description>
    </ItemCard>
  );
}

export default Category;