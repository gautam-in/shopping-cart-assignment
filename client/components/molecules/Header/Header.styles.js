import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 3fr 8rem;
  margin-bottom: 40px;
  padding: 16px 72px;
  gap: 2rem;
  box-shadow: 0 4px 4px var(--light-grey);

  .logo {
    width: 50%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;

  & > a:not(:first-child) {
    margin-left: 16px;
  }
`;

export const CartButton = styled.button`
  white-space: nowrap;
  padding: 10px 20px;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: -16px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    justify-content: flex-end;
  }
`;

export const CartIcon = styled.div`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: var(--pink);
  mask: url("/images/cart.svg") center no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
`;
