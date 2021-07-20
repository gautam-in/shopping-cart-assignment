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
  @media (min-width: 961px) {
  }
  //media queries for desktop
  @media (min-width: 1025px) {
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
`;
