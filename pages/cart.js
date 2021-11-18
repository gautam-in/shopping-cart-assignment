import styled from "styled-components";
import Cart from "../components/Cart";
import { createGlobalStyle } from "styled-components";

const CartBody = createGlobalStyle`
body{
    background-color: var(--light-grey);
}
`;



export default function cart() {
  return (
    <div>
      <CartBody />
     
        <Cart />
    
    </div>
  );
}
