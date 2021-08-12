import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
:root {
    --maxWidth: 1170px;
    --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --colorPrimary: #BF2957;
    --colorBlue: #50DAE4;
    --swiper-pagination-color: #555;
    --swiper-theme-color: var(--swiper-pagination-color);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

* {
box-sizing: border-box;
}

html,
body {
padding: 0;
margin: 0;
font-family: var(--fontFamily)
}

a {
color: inherit;
text-decoration: none;
}

`;

export const InnerStyles = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 1rem;
`;
