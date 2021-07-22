import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: lightgray;
  padding: 1rem 0.7rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 24px;
    margin-right: 0.2rem;
    filter: invert(15%) sepia(96%) saturate(4488%) hue-rotate(324deg)
      brightness(79%) contrast(93%);
  }
`;

export const CartStyle = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: red;
  //media queries for tablet
  @media (min-width: 768px) {
    width: 50%;
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    top: 0;
  }
`;
