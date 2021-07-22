import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
html{
    --themeRed: #bf2957;
    --grey: #fafafa;
    --darkGrey: #A9A9A9;
    --black: #0d0d0d;
    --themeBlue: #50c3cd;
    --errorRed: #ff0000 ;
    --boxShadow :  rgba(0, 0, 0, 0.10) 0px 25px 20px -20px;
    font-family: Dosis, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
*, *::before, *::after{
    box-sizing: border-box;
    margin:0;
    padding: 0;
}
`;
export const ButtonStyle = styled.button`
  background-color: var(--themeRed);
  border: none;
  color: white;
  padding: 0.6em 1em;
  cursor: pointer;
  font-family: Dosis, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; ;
`;
export const pageMaxWidth = '1368px';
