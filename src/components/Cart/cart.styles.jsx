import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const CartModal = styled.div`
  position: fixed;
  bottom: 0;
  right: 10%;
  background-color: #ececec;
  height: 85%;
  width: 35%;
  z-index: 100;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const CartQuantityButton = styled.button`
  border: none;
  color: #fff;
  background-color: #d00256;
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;
