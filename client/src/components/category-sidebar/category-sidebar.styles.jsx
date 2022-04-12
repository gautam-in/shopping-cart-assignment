import styled from 'styled-components';

import { device } from '../../utils/breakpoints/devices';

const offWhite = '#eaeaea';
const mediumGray = '#606060';

export const CategorySidebarContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    background-color: ${offWhite};
    height: 100%;
  }
`;

export const CategoryLink = styled.h2`
  font-size: 1.25rem;
  color: ${mediumGray};
  padding: 0.5rem 2rem;
  border-bottom: 1px solid;
  width: 68%;
  margin-left: auto;
  font-weight: 200;
`;
