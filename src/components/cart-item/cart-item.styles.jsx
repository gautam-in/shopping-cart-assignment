import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 95%;
  display: flex;
  height: 20%;
  margin-bottom: 15px;
  background-color: white;
  margin: 2%;
  border-radius: 5px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;

export const BaseSpan = styled.span`
  width: 100%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  cursor: pointer;
  border-radius: 15px;
  padding: 3px 10px;
  background-color: #8d0975;
  color: white;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  margin: 0 10px;
`