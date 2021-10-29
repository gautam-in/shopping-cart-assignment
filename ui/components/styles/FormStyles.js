import styled, { keyframes } from 'styled-components';

const Form = styled.form`
    text-decoration-color:red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: theme.spacing(2);
    

    & .MuiTextField-root {
      margin: theme.spacing(1);
      width: 500px;
      
    };
    & .MuiButtonBase-root {
      margin: theme.spacing(2);
      
    };
    /* & .MuiFormLabel-root :focus {
      color: red // or black
    } */
    #fName {
      background-color: white;
    
    }
    #lName {
      background-color: white;
    }
    #email {
      background-color: white;
    }
    #pass {
      background-color: white;
    }
    #submit{
      background-color: red;
      width: 500px;
    }
    @media (max-width: 600px) {
      #submit{
        background-color: red;
        width: 200px;
      }
      & .MuiTextField-root {
        margin: theme.spacing(1);
        width: 200px;
      };
    }
`;

export default Form;
