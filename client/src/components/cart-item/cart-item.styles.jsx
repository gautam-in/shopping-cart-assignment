import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
  align-items: flex-start;
  img {
    width: 6rem;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin: 1rem 1rem 0 1rem;
  }

  div {
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

export const CartitemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SingleItemTotal = styled.div`
  font-size: 1.25rem;
`;
