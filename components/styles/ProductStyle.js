import styled from 'styled-components';

export const ProductsStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
  & > div {
    display: grid;
    grid-template-columns: 1fr;
  }

  //media queries for tablet
  @media (min-width: 768px) {
    flex-direction: row;
    aside#sidebar {
      flex: 1.5;
      background-color: var(--grey);
      position: relative;
    }
    aside#sidebar ul li {
      list-style-type: none;
      padding: 5px;
      border-bottom: 1px solid var(--darkGrey);
      cursor: pointer;
    }
    aside#sidebar ul li[selected='true'] {
      background-color: var(--darkGrey);
    }
    div#products {
      flex: 5;
      padding: 5px;
    }
    & > aside > div#dropdown {
      display: none;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    /* & > div {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    } */
  }
`;

export const SingleProductStyle = styled.div`
  margin: 1em 0;
  border-bottom: 1px solid var(--darkGrey);
  padding-bottom: 5px;
  & > div {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  & > div > img {
    flex: 1;
    max-width: 40%;
  }
  & > div > div {
    flex: 1;
    padding: 10px;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & > div > div > p {
    background-color: var(--grey);
    padding: 2px;
  }
  div > div > button {
    width: 100%;
    margin-top: 10px;
  }
  & > div.button-group-desktop {
    display: none;
  }

  //media queries for tablet
  @media (min-width: 768px) {
    & > div > div {
      background-color: var(--grey);
    }
    & > div > div > button {
      display: none;
    }
    & > div > div > p {
      font-size: 1.5em;
    }
    & > div.button-group-desktop {
      display: flex;
    }
    .button-group-desktop span {
      display: none;
    }
    .button-group-desktop button {
      width: 100%;
      margin: 1em;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    /* & > div {
      background-color: red;
      flex-direction: column;
    } */
  }
`;

export const ProductSideBarDesktopStyle = styled.div`
  flex: 0.5;
`;
