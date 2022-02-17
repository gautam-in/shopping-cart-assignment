import styled from "styled-components";
import CustomButton from "../custom-button/custom-buttom.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  margin: 70px auto;
  background: var(--color-light);
  width: 50%;
  position: relative;
  transition: all 5s ease-in-out;
  /* border: 1px solid black;
  background-color: white;
  top: 0; */
  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    &:target {
      visibility: visible;
      opacity: 1;
      z-index: 2;
    }
  }
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
