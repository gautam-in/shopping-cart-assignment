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
  height: calc(100vh - 180px);
  background-color: var(--grey);
  & > header > button {
    display: none;
  }
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
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    width: 50%;
    top: 0;
    height: calc(100vh - 90px);
    & > header {
      background-color: var(--slate);
      color: white;
      margin: 0;
      display: flex;
      justify-content: space-between;
    }
    & > header > button {
      display: inline;
      background-color: transparent;
      font-family: monospace;
      font-weight: bold;
      padding: 0;
    }
  }
`;

export const CartItemsContainer = styled.main`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4px;
  & > div#info-label {
    display: flex;
    background-color: white;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 1em;
    padding: 5px;
  }
  & > div#info-label > span {
    margin-left: 2em;
  }
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

export const CartFooterStyle = styled.form`
  padding: 0.5em;
  text-align: center;
  background-color: white;

  & > p {
    font-weight: bold;
  }
  & > button {
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    margin: 0.5em;
    width: calc(100% - 1em);
  }
  & > button > span#start-shopping {
    display: block;
    width: 100%;
    text-align: center;
  }
  & > button > span > i.arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  & > button > span > i.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;

export const QuantityStyle = styled.div`
  margin-top: 1em;
  & > button {
    padding: 2px 6px 4px 6px;
    font-size: 1em;
    border-radius: 100%;

    font-family: monospace;
  }
  & > span {
    display: inline-block;
    min-width: 2em;
    text-align: center;
  }
`;
