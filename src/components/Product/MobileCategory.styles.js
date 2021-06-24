import styled from "styled-components";

export const Container = styled.div`
  .MuiFilledInput-root,
  .MuiFilledInput-root:hover,
  .MuiFilledInput-root.Mui-focused {
    background-color: #c41162;
    border-radius: 0;
  }
  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:hover:before {
    border-bottom: none;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiSelect-filled.MuiSelect-filled {
    padding: 1rem;
    color: #ffffff;
  }
  .MuiSelect-icon {
    color: #ffffff;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;
