import styled from "styled-components";

export const ProductsSidebarContainer = styled.div`
  display: flex;
  background-color: rgb(234, 234, 234);
  height: 100%;
  flex-direction: column;
  flex: 1;
  width: 200px;
  @media (max-width: 500px) {
    display: none;
  }
`;