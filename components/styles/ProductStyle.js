import styled from 'styled-components';

export const ProductsStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
  & > div {
    display: grid;
    grid-template-columns: 1fr;
  }
  aside#sidebar > div:nth-child(2) {
    display: none;
  }

  //media queries for tablet
  @media (min-width: 768px) {
    flex-direction: row;
    aside#sidebar {
      background-color: var(--grey);
      flex: 1;

      position: relative;
    }
    aside#sidebar > div:nth-child(2) {
      display: block;
    }

    aside#sidebar ul li {
      list-style-type: none;
      padding: 1em 5px;
      border-bottom: 1px solid var(--darkGrey);
      cursor: pointer;
    }
    aside#sidebar ul li[class='active'] {
      background-color: var(--darkGrey);
    }
    div#products {
      flex: 5;
      padding: 5px;
    }
    & > aside > div#dropdown {
      display: none;
    }
    & > div#products {
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    & > div#products {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    y & > div > div {
      background-color: var(--grey);
    }
    & > div > div > button {
      display: none;
    }
    & > div > div > p {
      font-size: 1em;
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

    & > div > img {
      min-width: 50%;
      object-fit: contain;
    }
    & > div.button-group-desktop button#button-desktop {
      display: none;
    }
  }
  //media queries for desktop
  @media (min-width: 1025px) {
    border-right: 1px solid rgba(220, 220, 220, 0.2);
    & > div {
      flex-direction: column;
      position: relative;
      align-items: center;
    }
    & > div > img {
      flex: 1;
      max-width: 80%;
    }
    & > div > div {
      flex: 1;
    }
    & > div.button-group-desktop {
      display: flex;
      flex-direction: row;
    }
    & > div.button-group-desktop span {
      display: block;
      flex: 1;
    }
    & > div.button-group-desktop button#button-desktop {
      display: block;
      flex: 1;
    }
    & > div.button-group-desktop button#button-tablet {
      display: none;
    }
    & > div > div > p {
      font-size: 1.2em;
    }
  }
`;

export const ProductSideBarDesktopStyle = styled.div`
  flex: 0.5;
`;
