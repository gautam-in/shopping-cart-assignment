import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 30%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  margin: 1.5%;

  @media (max-width: 767px) {
    width: 90%;
    margin: 5%;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const ProductImage = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const ProductDescription = styled.p`
  background: #eee;
  padding: 10px;
  margin: 10px 0;
  font-size: 14px;
`;

export const BuyBtn = styled.button`
  background: var(--colorPrimary);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ProductMain = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
