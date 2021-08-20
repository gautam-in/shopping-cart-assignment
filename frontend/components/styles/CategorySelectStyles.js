import styled from "styled-components";

export const CategorySelectStyles = styled.div`
  height: 800vh;
  background-color: lightgray;
  width: 10%;
  position: absolute;
  right: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  li
  {
      border-bottom: 1px solid darkgray;
      padding: 6px;
      cursor: default;

  }
  li:active{
      background-color: #e3e3e3;
  }
 
`;
