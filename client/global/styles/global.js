import { createGlobalStyle } from "styled-components";
import { sizes } from "./sizes";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: Dosis;
    src: url(https://fonts.googleapis.com/css?family=Dosis:400,600,700);
}

html {
    --theme-pink : #d10157;
    --dark-pink : #92003c;
    --theme-blue : #51dae3;
    --light-grey: #eaeaea;
    --grey: #989898;
    --dark-grey: #64656a;
    --red : red;
}

body {
    font-family: 'Dosis', sans-serif;
    font-display: swap;
    margin: 0;
    padding: 0;

    @media (max-width: ${sizes.mobileL}) {
       font-size: 12px;
      }
}

a {
    color: var(--dark-grey);
    text-decoration: none;
}
`;

export default GlobalStyles;
