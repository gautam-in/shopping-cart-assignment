import styled from 'styled-components';
import { InvertedButton } from '../button/button.styles';

const offWhite = '#f0f0f0';
const mediumGray = '#a8a7a7c5';

export const ProductCardContainer = styled.div`
  padding: 1rem;

  box-shadow: 11px 0px 10px -5px ${mediumGray};
  border-bottom: 1px dashed;
  height: fit-content;

  h2 {
    height: 4.375rem;
    width: 90%;
  }

  p {
    overflow: hidden;
    height: 5rem;
    text-overflow: ellipsis;
    background-color: ${offWhite};
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
