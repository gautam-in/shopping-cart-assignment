import styled from 'styled-components';

export const HeaderCenterDiv = styled.div`
  box-shadow: var(--boxShadow);
  height: max-content;
`;

export const HeaderContainer = styled.header`
  display: flex;

  justify-content: space-between;
  height: max-content;
  max-height: 60px;

  //media queries for tablet
  @media (min-width: 961px) {
    background-color: red;
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    background-color: green;
    max-height: 90px;
    max-width: 1300px;
    margin: 0 auto;
    img {
      margin: 5px;
    }
  }
`;

export const LeftNav = styled.nav`
  display: flex;
  justify-content: space-between;

  ul {
    display: none;
  }
  //media queries for tablet
  @media (min-width: 961px) {
    background-color: red;
    ul {
      display: flex;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    background-color: green;
    ul {
      display: flex;
    }
  }
`;

export const RightNav = styled.nav`
  display: flex;
  align-items: stretch;
`;
