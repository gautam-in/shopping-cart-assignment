import styled from 'styled-components';

export const SigninStyle = styled.section`
  display: flex;
  div {
    flex: 1;
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
`;
