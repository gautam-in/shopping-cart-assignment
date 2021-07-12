import styled, { createGlobalStyle } from "styled-components";

export const InnerStyle = styled.main`
  margin: 0 auto;
  right: 0;
  font-size: 0.75rem;
  padding-top: var(--headerHeight);
  max-width: var(--maxWidth);
  @media only screen and (max-width: 767px) {
    max-width: 100%;
    padding-top: calc(var(--headerHeight) / 2);
  }
`;

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Dosis:400,600,700");
:root{
    --black: #000;
    --white: #fff;
    --darkgrey:#777;
    --grey: #7f8c8d;
    --lightgrey:#ccc;
    --lightestgrey:#eee;
    --magenta:#c02345;
    --maxWidth: 1140px;
    --headerHeight: 100px;
    --sideNavWidth: 230px;
    --productDesktopWidth: calc((var(--maxWidth) = var(--sideNavWidth)) / 6 + 5px );
    --productTabletWidth:calc((var(--maxWidth) - var(--sideNavWidth)) / 4  );
    --productHeight: 450px;
    --footerHeight: 50px
  }
  
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'dosis',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 20px;
      overflow-x: hidden;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;
