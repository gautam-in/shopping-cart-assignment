import styled, { css } from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const ProductsPageWrapper = styled.div`
  display: flex;

  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}
`;

export const CategoriesFilterDropdown = styled.div`
  button {
    position: relative;
  }

  ul {
    z-index: 1;
    position: absolute;
    width: 100%;
    box-sizing: border-box;

    li {
      max-width: none;
      padding: 12px 12px 12px 24px;
      font-size: 0.75rem;
      border-bottom: none;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 72px;
    padding-right: 72px;

    @media (max-width: ${sizes.mobileL}) {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;

export const CategoriesFilter = styled.ul`
  padding: 0 8px;
  margin: 0;
  min-width: fit-content;
  list-style-type: none;
  background-color: var(--light-grey);
  cursor: pointer;
  user-select: none;
`;

export const CategoryFilterItem = styled.li`
  padding: 20px;
  max-width: 13.5rem;
  border-bottom: 1px solid var(--grey);
  color: ${(props) => (props.selected ? "var(--black)" : "var(--dark-grey)")};

  &:hover {
    color: var(--black);
  }
`;
