import styled from 'styled-components';
import { pageMaxWidth } from './GlobalStyles';

export const Main = styled.main`
  @media (min-width: 1025px) {
    max-width: ${pageMaxWidth};
    margin: 2em auto;
  }
`;
