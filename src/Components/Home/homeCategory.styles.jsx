import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 ? "row-reverse" : "row")};
  justify-content: space-between;
  padding: 40px 0;
  box-shadow: 0 20px 30px -30px rgba(0, 0, 0, 0.7);
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #d00256;
  padding: 12px;
`;
