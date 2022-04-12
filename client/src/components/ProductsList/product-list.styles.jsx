import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';

export const ProductListContainer = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    padding-bottom: 4rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
