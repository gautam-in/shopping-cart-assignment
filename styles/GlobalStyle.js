import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
html{

  /* Colors */
    --brightGray : #eeeeee;
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
      border-radius: 3px;
      cursor: pointer;
    }
  input[type='submit']{
    cursor: pointer;
  }
`;

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  @media (min-width: 769px) {
    width: var(--containerWidth);
  }
`;
