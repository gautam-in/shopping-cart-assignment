import { Fragment } from "react";
import Styled from "styled-components";
import { ReactComponent as CartImage } from "./cart.svg";

const CartIconContainer = Styled.div`
  background-color: #f1f1f1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CartIcon = ({handleModalOpen,cartTotalQuantity}) => {
  return (
    <Fragment>
      <CartIconContainer onClick={handleModalOpen}>
        <CartImage
          style={{
            width: "30px",
            height: "30px",
            fill: "#bf2957",
            paddingRight: "10px"
          }}
        />
        <span>{`${cartTotalQuantity} ${cartTotalQuantity > 1 ? 'items': 'item'}`}</span>
      </CartIconContainer>
    </Fragment>
  );
};

export default CartIcon;
