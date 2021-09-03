import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.header`
  position: sticky;
  display: grid;
  grid-template-columns: auto 3fr 8rem;
  padding: 16px 72px;
  gap: 2rem;
  box-shadow: 0 4px 4px var(--light-grey);

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: auto 3fr 4rem;
    padding: 16px 16px;
    gap: 1rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;

  & > a:not(:first-child) {
    margin-left: 16px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    justify-content: flex-end;
    margin-bottom: 8px;

    @media (max-width: ${sizes.mobileL}) {
      flex-direction: column;
    }
  }
`;

export const CartIcon = styled.div`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: var(--theme-pink);
  mask: url("/images/cart.svg") center no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
`;

export const CartButton = styled.button`
  white-space: nowrap;
  padding: 10px 20px;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: -16px;

  @media (max-width: ${sizes.mobileL}) {
    padding: 8px 8px;
  }
`;

export const ItemsCount = styled.div`
  margin-left: 8px;

  @media (max-width: ${sizes.mobileL}) {
    span {
      display: none;
    }
  }
`;
