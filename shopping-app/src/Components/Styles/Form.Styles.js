import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  height: auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-width: 699px) {
    & {
      width: 90%;
      margin: 0 auto;
      align-items: center;
      padding: 0.5rem;
    }
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 100%;

  position: relative;
`;

const Label = styled.label`
  font-size: 1.6rem;
  padding: 1.5rem 0 0.5rem 0;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all 0.3s ease;

  @media only screen and (max-width: 650px) {
    & {
      font-size: 1.4rem;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #e5e5e5;
  outline: none;

  padding: 1.5rem 0 0.5rem 0.5rem;
  font-size: 1.5rem;

  &:focus + ${Label}, &:valid + ${Label} {
    transform: translateY(-25px);
    color: #5fa8d3;
  }

  &:focus,
  &:valid {
    border-bottom: 2px solid #5fa8d3;
  }
`;

export { Input, Label, FormItem, Form };
