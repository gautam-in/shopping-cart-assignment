import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 720px) {
    display: none;
  }
  @media screen and (min-width: 1024kpx) {
    display: none;
  }
`;
export const Label = styled.label``;
export const Select = styled.select`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 300;
  padding: 0.5em 0.5em;
`;
export const Option = styled.option``;
