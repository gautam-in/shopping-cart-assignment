import styled from 'styled-components';

import { device } from '../../utils/breakpoints/devices';

const offWhite = '#eaeaea';

export const FooterContainer = styled.div`
  background-color: ${offWhite};
  height: 3rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  p {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    font-weight: 400;

    @media ${device.tablet} {
      font-size: 1rem;
    }
  }
`;
