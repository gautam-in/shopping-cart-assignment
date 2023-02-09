import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    width: 60%;
    max-width: 1020px;
    margin: auto;
    margin-top: 2rem;

    @media (max-width: 1100px) {
      width: 100%;
    }
    @media (max-width: 700px) {
      width: 100%;
      flex-direction: column;
    }

`
export const FormHeader = styled.div`
    padding-left: 2rem;
    margin: 2rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    h2 {
      text-align: left;
    }
    p {
      text-align: left;
    }

`

export const Form = styled.form`
    flex: 1;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 50%; */
    /* margin: 0 auto; */
    padding: 20px;

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  
    label {
      font-weight: 600;
      text-align: left;
      color: #a9a9a9;
    }
    
    input {
      /* width: 100%; */
      height: 1.2rem;
      font-size: 1rem;
      border: none;
      border-bottom: 0.1rem solid #a9a9a9;
      /* padding: 5px; */
      outline: none;
    }
    input:focus{
      margin-top: 0.5rem;
      border-bottom: 1px solid blue;
    }
    small{
      color: red;
      font-weight: 500;
    }

    .error-msg{
      text-align: left;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    margin-bottom: 2rem;
    font-weight: 600;
    padding: 0.8rem 1.2rem;
    color: white;
    border: none;
    background-color: #ab4747;
    cursor: pointer;
    border-radius: 1px;

`