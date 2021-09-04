import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 30px 0;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-grow: 1;
    padding-top: 40px;
  }
`;

export const FormLeft = styled.div`
  padding: 0 10px;
  font-size: 0.9rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 4.5rem;
  }
  @media (min-width: 769px) {
    padding-top: 30px;
  }
`;

export const FormRight = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  flex-grow: 1;
  padding: 10px;
  @media (min-width: 769px) {
    margin: 0 50px;
    max-width: 400px;
  }
  .formError {
    background-color: rgba(255, 0, 0, 0.4);
    border-radius: 5px;
    margin: 5px;
    color: red;
    text-align: center;
    font-size: 0.9rem;
    p {
      margin-block-end: 0px;
      margin-block-start: 0px;
    }
  }
`;
