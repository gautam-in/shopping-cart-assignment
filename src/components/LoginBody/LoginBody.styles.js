import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RightBody = styled.div`
  margin-left: 5rem;
  width: 25%;
  .right-body {
    display: flex;
    flex-direction: column;
    .MuiFormControl-root {
      margin-top: 0.5rem;
    }
    .MuiFormLabel-root {
      font-size: 0.8rem;
    }
  }
  .confirm-btn {
    margin-top: 2rem;
  }
  @media (max-width: 990px) {
    margin-left: 2rem;
    width: 35%;
  }
  @media (max-width: 650px) {
    margin-left: 0rem;
    width: 80%;
  }
`;
