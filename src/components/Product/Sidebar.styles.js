import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 100%;
  background: #e3dede;
  padding: 0rem 0.7rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 2;
`;

export const CategoryItem = styled.div`
  color: ${(props) => (props.active ? "#008000" : "#787272")};
  border-bottom: 1px solid #838080;
  width: 100%;
  padding: 0.5rem 0.2rem 0.5rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  user-select: none;
  &:hover {
    color: #030d03;
  }
`;
