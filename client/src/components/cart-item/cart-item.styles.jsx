import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 15px;
  img {
    width: 7.5rem;
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
    margin-top: 0.5rem;
  }
`;

export const QuantityIcon = styled.span`
  background-color: #c12956;
  border-radius: 50%;
  padding: 0.15rem 0.5rem;
  cursor: pointer;
  color: #fff;
  margin: 0 1rem;
  font-size: 1.25rem;
`;
