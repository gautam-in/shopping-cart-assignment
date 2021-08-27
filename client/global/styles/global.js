import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    --pink : #d10157;
    --light-grey: #eaeaea;
    --dark-grey: #64656a;
}

body{
    margin: 0;
    padding: 0;
}

a {
    color: var(--dark-grey);
    text-decoration: none;
}
`;

export default GlobalStyles;
