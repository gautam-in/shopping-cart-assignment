import styled from 'styled-components';

export const CartItemStyle = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 100px;
  background-color: ${props => props.theme.white};
  margin: 0.5rem 0;
  h4 {
    margin: 0;
    font-size: 0.8em;
  }
  .counter-btn {
    padding: 0;
    font-size: 1rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .product-quantity {
    flex: 1;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  span {
    margin: 0 0.75rem;
  }
`;

export const ProductQuantityDetails = styled.div`
  display: flex;
  align-items: center;
  div{
    flex: 1;
  }
  span{
    font-size: 1em;
  }
`;
