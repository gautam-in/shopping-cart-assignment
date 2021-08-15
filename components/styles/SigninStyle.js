import styled from 'styled-components';

export const SigninStyle = styled.section`
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
  }
  & > div {
    padding: 1em;
  }
  div form fieldset {
    border: none;
  }
  div h2 {
    margin: 1em 0;
    font-weight: bold;
  }
  div form > div {
    color: red;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;
