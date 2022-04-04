import styled from 'styled-components';
import { InvertedButton } from '../button/button.styles';

export const ProductCardContainer = styled.div`
  padding: 1rem;

  box-shadow: 11px 0px 10px -5px #efefef;
  border-bottom: 1px dashed #a8a7a7c5;
  height: fit-content;

  h2 {
    height: 70px;
    width: 90%;
  }

  p {
    overflow: hidden;
    height: 5rem;
    text-overflow: ellipsis;
    background-color: #f0f0f0;
    padding: 1rem;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardButton = styled(InvertedButton)`
  width: 7rem;
  padding: 0;
  margin: 0;
`;
