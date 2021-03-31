import styled, { createGlobalStyle } from "styled-components";
import CartContainer from "./CartContainer";
import Header from "./Header";
const GlobalStyles =createGlobalStyle`
html {
--red :#ff0000;
--black: #393939;
--grey:#3a3a3a;
--lightGrey:#e1e1e1;
--offwhite:#ededed;
--maxWidth:1000px;
--bs:'0 12px 24px 0 rgba(0,0,0,0.9)';
}
a{
    text-decoration:none;
    color:var(--black);
}
a:hover{
    text-decoration:underline;
}
body{
    font-size: 12px;
    font-family:Dosis;    
    width: 100vw;
    height: 100vh;
    max-width:100%;
    margin:0;
    padding:0;
}
button{
    text-transform:none;
    border-radius:0;
}
@media (max-width: 420px) {
    body {
        font-size:10px;
    }
  }
`;
const InnerStyles =styled.div`
    // max-width: var(--max-width);
    margin:0 auto;
    padding: 0 1rem;
`;
 
 function Page(props){
    return (
        <div>
        <GlobalStyles/>
        <Header/>
        <InnerStyles>
            {props.children}
        </InnerStyles>
        </div>
    )
}
export default Page;