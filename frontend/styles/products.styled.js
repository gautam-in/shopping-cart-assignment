import styled from 'styled-components';

import { FlexMixin } from './mixins';

export const ProductsWrapper = styled.article`
  ${FlexMixin('space-between', 'flex-start')};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ${FlexMixin('space-between', 'flex-start', 'column')};
  }
`;
