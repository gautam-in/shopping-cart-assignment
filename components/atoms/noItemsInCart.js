import styled from "styled-components";
import Image from "./image";

const ItemStyle =styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
`;

function NoItemsInCart() {
    return (
        <ItemStyle>
          <h1>No Items in your Cart</h1>
          <p>Your favorite items are just a click away</p>
        </ItemStyle>
    );
}
export default NoItemsInCart;