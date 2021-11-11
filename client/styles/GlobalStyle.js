import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body {
  font-family: 'Dosis', Arial;
}
html{

  /* Colors */

    --lightGray : #eaeaea;
    --gray : #afafaf;
    --darkGray : #737373;
    --dark : #262833;
    --brickRed : #bf2957;
    --skyBlue: #2fb9c6;
    --white: #f8f9fe;
    --black: #1d1d1d;
  
    /* Sizes */
    --maxWidth: 1025px;
    --containerWidth: 80%;

}
*, *::before, *::after{
    box-sizing: border-box;
    margin:0;
    padding: 0;
}

a {
    text-decoration: none;
    color: var(--dark);
    &:focus{
      outline:1px solid black;
    }
  }
  

  button {
      font-size: 0.8rem;
      margin: 10px auto;
      padding: 10px;
      background-color: var(--brickRed);
      outline: none;
      border: none;
      font-weight: bold;
      color: var(--white);
      cursor: pointer;
      &:focus{
        border:1px solid black;
      }
    }
  input[type='submit']{
    cursor: pointer;
    &:focus{
      border:1px solid black;
    }
  }
`;

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  min-height: calc(100vh - 130px);
  @media (min-width: 769px) {
    width: var(--containerWidth);
  }
`;
