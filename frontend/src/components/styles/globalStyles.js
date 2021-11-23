import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  --red: #BF2957;
  --black: #383838;
  --grey: #EAEAEA;
  --gray: var(--grey);
  --offWhite: #FFFFFF;
  --maxWidth: 1200px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

 body{
   padding: 0;
   margin: 0;
   width: 100%;
    max-width: 100%;
 }

 a {
  text-decoration: none;
  color: var(--black);
}
a:hover {
  text-decoration: underline;
}

button{
  background-color: var(--red);
  color: var(--offWhite);
  padding: 15px;
  cursor: pointer;
  border: none;
  outline: none;
}
`;
export const ContainerStyles = styled.div`
padding: 20px;
max-width: 1200px;
width: 100%;
margin: 0 auto;
`;