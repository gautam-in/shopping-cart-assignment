import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';
import { InvertedButton } from '../button/button.styles';

const offWhite = '#f0f0f0';
const mediumGray = '#a8a7a7c5';

export const ProductCardContainer = styled.div`
  padding: 1rem;
  box-shadow: 11px 0px 10px -5px ${mediumGray};
  border-bottom: 1px dashed;
  height: fit-content;

  h2 {
    height: fit-content;
    width: 90%;

    @media ${device.tablet} {
      height: 4.375rem;
      padding: 0.5rem;
      margin: 0;
    }

    @media ${device.tablet} {
      height: 4.375rem;
    }
  }

  p {
    overflow: hidden;
    height: 5rem;

    text-overflow: ellipsis;
    background-color: ${offWhite};
    padding: 1rem;
  }
`;

export const ProductPriceDetail = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ProductDetailsDesktopBlock = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export const ProductCardButton = styled(InvertedButton)`
  width: 7rem;
  padding: 0;
  margin: 0;
`;

export const ProductDetailsMobileBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  img {
    width: 10rem;

    @media ${device.tablet} {
      width: 7.5rem;
      margin: 0 auto;
    }

    @media ${device.laptop} {
      width: 16rem;
      margin: 0 auto;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 50% 50%;
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

export const ProductDescription = styled.div`
  @media ${device.laptop} {
    display: none;
  }
`;
