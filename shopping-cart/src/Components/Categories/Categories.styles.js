import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 75%;
  overflow: hidden;
  border: 1px solod black;
  @media screen and (max-height: 830px) {
    height: 80%;
    overflow-y: auto;
  }
`;
