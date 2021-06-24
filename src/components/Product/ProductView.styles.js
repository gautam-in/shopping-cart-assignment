import styled from "styled-components";

export const Container = styled.div`
  margin-left: 230px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    margin-left: 210px;
  }
  @media (max-width: 960px) {
    margin-left: 180px;
  }
  @media (max-width: 800px) {
    margin-left: 160px;
    padding: 0.5rem;
  }
  @media (max-width: 650px) {
    margin-left: 0;
    justify-content: center;
  }
`;
