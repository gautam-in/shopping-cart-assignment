import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
html{
    --button: #bf2957;
    --grey: #fafafa;
    --black: #0d0d0d;
    --boxShadow :  rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;;
    font-family: Dosis, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
*, *::before, *::after{
    box-sizing: border-box;
    margin:0;
    padding: 0;
}
`;

export const CenterDiv = styled.div`
  @media (min-width: 1025px) {
    min-width: 1025px;
  }
`;
