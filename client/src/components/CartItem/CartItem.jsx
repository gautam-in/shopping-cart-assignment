import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  height: 100px;
  width: 98%;
  padding: 10px;
  font-size: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ImgContainer = styled.div`
  height: 80px;
  width: 80px;
  img {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  p {
    font-size: 85%;
    font-weight: 600;
  }
`;

const QtyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

const QtyBtn = styled.button`
  background-color: #BF2957;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
`;

const TotalPrice = styled.p`
  align-self: flex-end;
`;

const CartItem = ({ imageURL, name, qty, price }) => {
  return (
    <Card>
      <ImgContainer>
        <img src={imageURL} alt={name} />
      </ImgContainer>
      <Description>
        <p>{name}</p>
        <QtyWrapper>
          <QtyBtn>
            -
          </QtyBtn>
          <span>{qty}</span>
          <QtyBtn>
            +
          </QtyBtn>
          <p> X Rs. {price} </p>
        </QtyWrapper>
      </Description>
      <TotalPrice>
        Rs. {price}
      </TotalPrice>
    </Card>
  );
}

export default CartItem;