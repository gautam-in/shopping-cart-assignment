import styled from 'styled-components';

export const FormContainer = styled.div`
display: flex;
width: 100%;
max-width: 800px;
margin: auto;
`;
export const FormDescription = styled.div`
flex: 0 0 40%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
`;
export const FormStyles = styled.form`
flex: 0 0 60%;
fieldset{
    border: none;
  }
.form-control{
 margin-bottom: 10px;
  label{
    display: block;
    margin-bottom: 2px;
    font-weight: bold;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    
    border-bottom: 2px solid var(--grey);
    &:focus {
      outline: 0;
      border-color: skyblue;
    }
  }
  
}
button{
    width: 100%;
    margin-top: 10px;
  }
`;