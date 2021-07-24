import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: var(--grey);
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

export const CartStyle = styled.article`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - 150px);
  background-color: var(--grey);

  & > header {
    padding: 1em;
    background-color: white;
    margin: 10px 0;
  }
  & > header > h3 > span {
    font-weight: lighter;
    font-size: 0.7em;
  }
  //media queries for tablet
  @media (min-width: 768px) {
    width: 50%;
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    top: 0;
  }
`;

export const CartItemsContainer = styled.main`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

export const CartItemStyle = styled.div`
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 5px;
  background-color: white;
  & > div {
    flex: 2;
    padding: 5px;
  }
  & > img {
    max-width: 100px;
    object-fit: contain;
  }
  & > p {
    display: flex;
    align-items: flex-end;
  }
`;

export const NoCartItems = styled.div`
  text-align: center;
  & > h3 {
    margin: 0.5 0;
  }
`;

export const CartFooter = styled.footer``;

export const Quantity = styled.div`
  margin-top: 1em;
  & > button {
    padding: 2px 6px 4px 6px;
    font-size: 1em;
    border-radius: 100%;
  }
  & > span {
    display: inline-block;
    min-width: 2em;
    text-align: center;
  }
`;
