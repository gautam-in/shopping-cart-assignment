import styled from 'styled-components';
import { pageMaxWidth } from './GlobalStyles';

export const Main = styled.main`
  padding: 2em 0px;
  @media (min-width: 1025px) {
    max-width: ${pageMaxWidth};
    margin: 0 auto;
  }
`;
