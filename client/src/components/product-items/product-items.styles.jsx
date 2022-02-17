import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media screen and (min-width: 1024px) {
    /* flex-direction: row;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    gap: 8px; */
  }
`;
