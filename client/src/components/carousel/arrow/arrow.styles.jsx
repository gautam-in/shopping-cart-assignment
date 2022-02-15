import styled from "styled-components";

export const ArrowContainer = styled.span`
  background: #4a403a;
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
    background: #595260;
  }
  ${(props) => props.align === `next` && `right:0;`}
`;
