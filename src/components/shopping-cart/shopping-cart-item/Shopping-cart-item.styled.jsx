import styled, { css } from "styled-components";

const styles = css`
  display: flex;
`;

export const ShoppingItemContainer = styled.div`
  ${styles};
  align-items: center;
`;

export const ShoppingItemImageContainer = styled.div`
  ${styles}
`;

export const ShoppingItemDetailsContainer = styled.div`
  ${styles};
  flex-direction: column;
  padding: 8px;
`;

export const ShoppingItemButtonContainer = styled.div`
  ${styles}
  padding: 4px;
  margin: 4px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #e22145;
  width: 20px;
  height: 15px;
  cursor: pointer;
`;

export const ShoppingItemActionsContainer = styled.div`
  ${styles}
  align-items: center;
  justify-content:space-between;
`;