import styled from "styled-components";
import CustomButton from "../custom-button/custom-buttom.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: white;
  top: 0;
`;
export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
export const EmptyMessageContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin: 50px auto;
`;
