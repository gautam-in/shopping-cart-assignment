import styled from "styled-components";
export const SignInStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  padding: 2rem;
  width: 100%;
  text-align: center;
  section {
    width: 40%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section {
      width: 80%;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section {
      width: 80%;
    }
  }
`;

export const FromGroup = styled.div`
  position: relative;
  margin-bottom: 10px;
  input:focus-visible {
    outline: none;
  }
`;

export const Label = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 15px;
  transition: 0.2s ease all;
  color: var(--label-color);
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 0px;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 0;
  border-bottom: 2px solid #50dae2;
  border-radius: 0.25rem;
  &:focus + ${Label} {
    top: 0;
    bottom: 10px;
    left: 15px;
    font-size: 11px;
    opacity: 1;
  }

  &:not(:focus):valid + ${Label} {
    top: 0;
    bottom: 10px;
    left: 15px;
    font-size: 11px;
    opacity: 1;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 0;
  color: var(--white);
  background-color: var(--button-color);
  margin-top: 1rem;
`;
