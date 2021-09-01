import styled, { css } from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${(props) =>
    !props.cartOpen &&
    css`
      transform: translateX(100%);
    `}
`;

export const CartWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 30%;
  top: 0;
  right: 0;
  min-width: 300px;
  background: var(--light-grey);
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: all 0.3s;

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
  }

  ${(props) =>
    !props.cartOpen &&
    css`
      transform: translateX(100%);
    `}
`;

export const CartHeading = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background: var(--black);
  color: var(--white);

  div {
    display: flex;
    align-items: center;
    white-space: nowrap;

    h3 {
      margin: 0;
      margin-right: 8px;
    }
  }

  button {
    background: var(--black);
    color: var(--white);
    border: 0;
    font-size: 1rem;
    z-index: 2;
  }
`;

export const CartContainer = styled.div`
  overflow-y: auto;

  ${(props) =>
    props.emptyCart &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & > p,
      h4 {
        margin: 0 0 8px 0;
      }

      p {
        font-size: 0.8rem;
      }
    `}
`;

export const CartFooter = styled.footer`
  padding: 0.5rem 1rem;
  background: var(--white);

  p {
    text-align: center;
    font-size: 0.6rem;
    margin: 0.5rem 0 0 0;
  }

  button {
    border-radius: 4px;
    margin-top: 8px;

    ${(props) =>
      props.cartItemsCount &&
      css`
        display: flex;
        justify-content: space-between;
      `}
  }
`;
