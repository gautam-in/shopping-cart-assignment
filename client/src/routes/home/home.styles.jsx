import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';

export const HomeContainer = styled.div`
  padding-bottom: 3rem;

  @media ${device.tablet} {
    padding-bottom: 5rem;
  }

  @media ${device.laptop} {
    padding-bottom: 10rem;
  }
`;
