import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
`;
