import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const ProductItemWrapper = styled.li`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 4px var(--light-grey);
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    @media (min-width: ${sizes.laptop}) {
      min-height: 40px;
    }
  }

  p {
    padding: 8px;
    flex-grow: 1;
    background-color: var(--light-grey);
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > * {
    flex: 1 1 40%;
    margin: 0;
  }
`;
