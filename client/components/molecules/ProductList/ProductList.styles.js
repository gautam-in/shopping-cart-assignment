import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const ProductListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  padding: 0;
  margin: 0;

  @media (max-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: 1fr;
  }
`;
