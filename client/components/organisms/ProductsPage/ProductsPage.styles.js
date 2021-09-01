import styled, { css } from "styled-components";
import Button from "../../atoms/Button";

export const ProductsPageWrapper = styled.div`
  display: flex;

  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}
`;

export const CategoriesFilterDropdown = styled.div`
  ul {
    text-align: center;

    li {
      max-width: none;
      padding: 12px;
      font-size: 0.75rem;
      border-bottom: none;

      &:last-child {
        border-bottom: none;
      }
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
