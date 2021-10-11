import styled from "styled-components";

const PlpStyles = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  @media (max-width: 480px) {
    margin: 0.5rem;
  }
`;

const PlpWrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

export { PlpWrapper, PlpStyles };
