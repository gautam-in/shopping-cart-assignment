import styled from "styled-components";

export const ArrowContainer = styled.span`
  display: none;
  background: var(--color-dark);
  opacity: 0.5;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background: var(--color-dark);
  }
  ${(props) => props.align === `next` && `right:0;`}

  @media screen and (min-width: 720px) {
    display: flex;
  }
`;
