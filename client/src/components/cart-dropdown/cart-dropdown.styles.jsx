import styled from "styled-components";
import CustomButton from "../custom-button/custom-buttom.component";

export const DropdownWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: visible;
  opacity: 5;
  z-index: 5;
 
  }
`;
export const CartDropdownContainer = styled.div`
  margin: 0px auto;
  background: var(--color-light);
  width: 100%;
  position: relative;
  height: 100%;
  overflow-y: auto;
  .header {
    position: fixed;
    top: 0;
  }
  @media screen and (min-width: 720px) {
    margin: 70px auto;
    width: 50%;
    height: 80%;
  }
`;
export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .popup {
    margin: 70px auto;
    background: $color-light;
    width: 50%;
    position: relative;
    transition: all 5s ease-in-out;
  }
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
