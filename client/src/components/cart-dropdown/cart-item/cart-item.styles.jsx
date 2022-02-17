import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: var(--color-white);
  margin: 1rem 0;
  padding: 1rem 1.4rem;
  align-items: end;
`;
export const ProductImage = styled.img`
  height: auto;
  width: 100px;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    margin-bottom: 0.8rem;
  }
`;
export const ItemCount = styled.div`
  display: flex;
  .decrement,
  .increment {
    height: 30px;
    margin: 0 20px;
    line-height: 25px;
    width: 30px;
    font-size: 1.4em;
    border-radius: 50%;
    background: var(--color-primary);
    color: var(--color-white);
    text-align: center;
    cursor: pointer;
  }
  .cross {
    margin: 0 20px;
  }
`;
export const TotalAmount = styled.div`
  padding: 0.3rem 0;
`;
