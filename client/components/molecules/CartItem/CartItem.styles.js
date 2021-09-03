import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--white);
  align-items: center;
  padding: 16px;
  margin: 16px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;

  h5 {
    margin: 0 0 8px 0;
  }

  span {
    font-size: 0.8rem;
  }
`;

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
  }

  & > * {
    margin-right: 8px;
  }
`;
