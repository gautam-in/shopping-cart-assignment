import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --btn-bg-primary: #ce0e55;
        --btn-bg-secondary: #eeeeee;
        --btn-text-white: #fafaf7;
        --text-dark-black: #1c1c1c;
        --text-light-black: #464646;
        --box-shadow: #cfcfcf;
    }
    html, body {
        box-sizing: border-box; 
        font-family: 'Dosis', sans-serif;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        text-rendering : optimizeLegibility;
    }
    input:-webkit-autofill {
        -webkit-box-shadow:0 0 0 50px white inset;
        -webkit-text-fill-color: #333;
    }
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 50px white inset;
        -webkit-text-fill-color: #333;
    } 
`;
