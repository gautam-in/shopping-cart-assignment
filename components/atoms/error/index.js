import styled from "styled-components";
const ErrorStyles = styled.div`
  color:red;
  height:1.5rem;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

function ErrorMessage(props){
    return (
        <ErrorStyles>
           <p>{props.message}</p>
        </ErrorStyles>
    )
}
export default ErrorMessage;