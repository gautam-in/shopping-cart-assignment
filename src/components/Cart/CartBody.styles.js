import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  height: 75%;
`;

export const CartProduct = styled.div`
  background-color: #ffffff;
  margin: 0.5rem 0;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 15%;
  }
  .details {
    width: 65%;
    .item-name {
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: 0.35rem;
    }
    .item-quantity {
      font-size: 0.8rem;
      .quantity-btn {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #c41162;
        border: none;
        color: #ffffff;
        cursor: pointer;
      }
      .times {
        margin: 0 0.5rem;
        font-weight: 400;
      }
      .total-item {
        font-weight: 600;
        margin: 0 0.5rem;
      }
    }
  }
  .total-price {
    font-size: 0.85rem;
    align-self: flex-end;
  }
`;

export const LowPrice = styled.div`
  padding: 0.7rem 0.4rem;
  margin: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  background-color: #ffffff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  .low-img {
    width: 25%;
    margin-right: 0.5rem;
  }
`;
