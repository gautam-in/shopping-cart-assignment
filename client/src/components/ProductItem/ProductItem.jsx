import React from 'react';
import styled from 'styled-components';

import Button from './../Button/Button';

const ItemCard = styled.div`
  width: 25%;
  height: 450px;
  border: 1px solid #eeeeee;
  font-size: 85%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Title = styled.h4`
  height: 15%;
`;

const ImgContainer = styled.div`
  width: 90%;
  height: 40%;
  img {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

const Description = styled.p`
  height: 30%;
  background-color: #eeeeee;
  padding: 10px;
`;

const Options = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 80%;
    font-weight: bold;
  }
`;

const ProductItem = (props) => {
  const { name, description, imageURL, price } = props;
  console.log(props)
  return (
    <ItemCard>
      <Title>{name}</Title>
      <ImgContainer>
        <img src={imageURL} alt={`${name} product`} />
      </ImgContainer>
      <Description>{`${description.slice(0, 100)}${description.length > 100 ? '...' : ''} `}</Description>
      <Options>
        <p>Rs. {price}</p>
        <Button>Buy Now</Button>
      </Options>
    </ItemCard>
  );
}

export default ProductItem;