import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 0.8rem;
    font-weight: 600;
    .items {
      font-size: 0.6rem;
      font-weight: 400;
    }
  }
  .close-cart {
    font-size: 0.8rem;
    cursor: pointer;
  }
`;
