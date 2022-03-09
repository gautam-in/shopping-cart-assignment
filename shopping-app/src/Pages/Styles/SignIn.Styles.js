import styled from "styled-components";

const FlexContainer = styled.section`
  width: 75%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 699px) {
    & {
      flex-direction: column;
      height: auto;
      width: 90%;
      margin: 2rem auto;
    }
  }
`;

const FlexColumnContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 2rem;

  @media only screen and (max-width: 699px) {
    & {
      width: 90%;
      margin: 0 auto;
      align-items: flex-start;
      padding: 0.5rem;
    }
  }
`;

export { FlexContainer, FlexColumnContainer };
