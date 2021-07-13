import styled from 'styled-components';
import { pageMaxWidth } from './GlobalStyles';

export const HeaderContainer = styled.div`
  box-shadow: var(--boxShadow);
  height: max-content;
`;

export const HeaderCenter = styled.header`
  display: flex;
  justify-content: space-between;
  height: max-content;
  max-height: 60px;

  //media queries for tablet
  @media (min-width: 961px) {
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    max-height: 90px;
    max-width: ${pageMaxWidth};
    margin: 0 auto;
    img {
      margin: 5px;
    }
  }
`;

export const LeftNav = styled.nav`
  display: flex;
  justify-content: space-between;

  & > ul {
    display: none;
  }
  & > ul > a {
    text-decoration: none;
    color: var(--gray);
    margin-right: 1.5em;
    font-size: 1.5em;
  }
  //media queries for tablet
  @media (min-width: 961px) {
    & > ul {
      display: flex;

      align-items: flex-end;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    min-width: 500px;
    & > ul {
      display: flex;
      align-items: flex-end;
    }
  }
`;

export const RightNav = styled.nav`
  display: flex;
  justify-content: stretch;
  ul {
    display: none;
  }
  //media queries for tablet
  @media (min-width: 961px) {
    justify-content: stretch;
    ul {
      display: none;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    ul {
      display: block;
      margin: 3px 4px;
    }
    ul a {
      font-size: 0.8em;
      margin-right: 6px;
      text-decoration: none;
      color: var(--gray);
    }
  }
`;
