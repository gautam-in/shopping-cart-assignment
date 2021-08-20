import { ItemStyles } from "./styles/ItemStyles";
import styled from "styled-components";
import { useContext } from "react";
import CartContext from "./context/CartContext";
const DescriptionStyles = styled.div`
  background-color: lightgray;
  height: 90%;
  width: 80%;
  padding: 18px;
  font-weight: 600;
  justify-items: center;
  line-height: 15px;
  font-size: x-small;
  border-radius: 5%;
  margin-top: 10px;
`;

const ButtonStyles = styled.button`
  background-color: #e33244;
  border-radius: 4%;
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  color: white;
`;
const PriceStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
function Product({ product }) {
  const { numItems, setNumItems, cart, setCart } = useContext(CartContext);
  function addToAdd(id) {
    const cartData = [...cart];
    console.log("cart data before incre", cartData);

    const index = cartData.findIndex((item) => {
      return item.id === id;
    });
    if (index !== -1) {
      console.log("before qty incre", cartData[index].quantity);
      cartData[index].quantity++;
      console.log("after qty increment", cartData[index].quantity);
    } else {
      product.quantity = 1;
      cartData.push(product);
      console.log("product added");
    }
    console.log("cartdata after ", cartData);
    setCart(cartData);
  }
  return (
    <ItemStyles>
      {product.name}
      <img src={product.imageURL} />
      <DescriptionStyles>{product.description}</DescriptionStyles>
      <PriceStyled>
        <h4>MRP Rs {product.price}</h4>
        <ButtonStyles
          onClick={() => {
            setNumItems(numItems + 1);
            addToAdd(product.id);
          }}
        >
          Buy Now
        </ButtonStyles>
      </PriceStyled>
    </ItemStyles>
  );
}

export default Product;
