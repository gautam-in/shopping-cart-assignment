import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const CategoryItemWrapper = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: center;
  padding: 16px 0;
  background-color: white;

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: 1fr 1fr;
  }

  &:first-child {
    padding-top: 0;
  }

  &:nth-child(even) {
    grid-template-columns: 2fr 1fr;

    @media (max-width: ${sizes.mobileL}) {
      grid-template-columns: 1fr 1fr;
    }

    *:first-child {
      order: 2;
    }

    *:last-child {
      order: 1;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 8px 10px -10px var(--dark-grey);
  }
`;

export const CategoryItemDescription = styled.div`
  text-align: center;

  button {
    width: auto;
  }
`;
