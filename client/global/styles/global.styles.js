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
    --black : black;
    --white: white;
}

body {
    font-family: 'Dosis', sans-serif;
    font-display: swap;
    margin: 0;
    padding: 0;

    .modal-open {
        overflow: hidden;
    }
}

@media (max-width: ${sizes.mobileL}) {
    body, button {
        font-size: 12px;
    }
   }

a {
    color: var(--dark-grey);
    text-decoration: none;

    &:hover {
        color: var(--black);
    }
}
`;

export default GlobalStyles;
