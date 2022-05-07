import Styled from "styled-components";
import { ReactComponent as CartImage } from "./cart.svg";

const CartIconContainer = Styled.div`
  background-color: #f1f1f1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CartIcon = ({handleModalOpen}) => {
  return (
    <>
      <CartIconContainer onClick={handleModalOpen}>
        <CartImage
          style={{
            width: "30px",
            height: "30px",
            fill: "#bf2957",
            paddingRight: "10px"
          }}
        />
        <span>0 items</span>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
