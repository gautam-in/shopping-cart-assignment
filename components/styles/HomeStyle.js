import styled from 'styled-components';

export const CategoryStyle = styled.section`
  box-shadow: var(--boxShadow);
  display: flex;
  margin-top: 2em;
  position: relative;
  div {
    flex: 1;
    padding: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }

  div img {
    object-fit: contain;
    width: 80%;
  }
  div article > button {
    cursor: pointer;
  }
  div article > * {
    margin-top: 1em;
  }

  /* div article h2 {
    font-size: 1em;
  }
  div article p {
    font-size: 0.8em;
  } */

  //media queries for desktop
  /* @media (min-width: 1025px) {
    & > div > img {
      width: 80%;
    }
  } */
`;
