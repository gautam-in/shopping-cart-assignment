import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    *::-webkit-scrollbar {
        width: 5px;
    }
    *::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    *::-webkit-scrollbar-thumb {
        background: #888;
    }
    *::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    * {
        scrollbar-width: thin;
    }
    .loader,
    .loader:before,
    .loader:after {
        background: #ce0e55;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }
    .loader {
        color: #ce0e55;
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
        position: absolute;
        top: 0;
        content: '';
    }
    .loader:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 1.5em;
    }
    @-webkit-keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
    @keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
`;
