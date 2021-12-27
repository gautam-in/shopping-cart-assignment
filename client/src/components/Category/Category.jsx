import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

const ItemCard = styled.div`
  width: 100%;
  height: 280px;
  font-size: 95%;
  display: flex;
  flex-direction: ${props => props.dir === "left" ? "row" : "row-reverse"};
  justify-content: flex-start;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 400px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

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
        <Button
          type="button">
          {`Explore ${key}`}
        </Button>
      </Description>
    </ItemCard>
  );
}

export default Category;