import styled from 'styled-components';

import { GridMixin } from './mixins';

export const ProductCardsWrapper = styled.section`
  ${GridMixin('1fr 1fr 1fr 1fr', 'space-between', 'stretch')};
  height: calc(100vh - 11rem - 22px);
  grid-auto-rows: minmax(min-content, max-content);

  width: 100%;

  grid-column-gap: 2rem;
  grid-row-gap: 3rem;

  padding: 0 2rem;

  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ${GridMixin('1fr', 'space-between', 'stretch')};

    grid-column-gap: 1rem;
    grid-row-gap: 3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    ${GridMixin('1fr 1fr', 'space-between', 'stretch')};
    grid-column-gap: 2rem;
    grid-row-gap: 6rem;
  }
`;
