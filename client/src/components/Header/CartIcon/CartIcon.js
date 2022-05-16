import { Fragment } from "react";
import Styled from "styled-components";
import { ReactComponent as CartImage } from "./cart.svg";
import { COLORS } from '../../../constants';

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
            fill: COLORS.PINK,
            paddingRight: "10px"
          }}
        />
        <span>{`${cartTotalQuantity} items`}</span>
      </CartIconContainer>
    </Fragment>
  );
};

export default CartIcon;
