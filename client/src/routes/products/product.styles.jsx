import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';

export const ProductContainers = styled.div`
  display: block;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100%;
    margin: 0 auto;
    height: calc(100vh - 5rem);
  }

  @media ${device.laptop} {
    grid-template-columns: 20% 80%;
  }
`;
