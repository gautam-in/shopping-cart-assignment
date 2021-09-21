import styled from 'styled-components';

import { FlexMixin } from './mixins';

export const ProductMenuWrapper = styled.aside`
  ${FlexMixin('space-between', 'flex-start', 'column')};

  height: calc(100vh - 9rem - 25px);
  background: rgb(234, 234, 234);
  min-width: 25rem;
  margin-left: -2rem;
  margin-top: -1.7rem;
  padding: 0 0 0 1rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    min-width: 20rem;
  }
`;

export const ProductMenuContent = styled.section`
  width: 100%;

  a {
    display: block;
    border-bottom: 1px solid #c7c5c5;
    padding: 0.8rem 0;
    text-decoration: none !important;
    letter-spacing: 0.2px;
  }
`;
