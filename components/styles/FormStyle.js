import styled from "styled-components";

const CustomFormStyle = styled.form`
  flex: 1;
  padding: 3rem;
  .input-container {
    margin: 2rem 0;
    position: relative;
    width: 80%;
    input {
      width: 100%;
      position: relative;
      font-size: 1em;
      padding: 1%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--lightgrey);
      outline: none;
      &:focus + label,
      &:valid + label {
        font-size: 0.8em;
      }
      &:focus {
        border-bottom: 1px solid #90caf9;
      }
    }
    label {
      padding: 0;
      line-height: 0;
      top: 0px;
      left: 0;
      position: absolute;
      transition: 0.2s;
      top: -10px;
      color: #90caf9;
    }

    &.error {
      input {
        border-bottom: 1px solid red;
      }
      label {
        color: red;
      }
      p {
        color: red;
      }
    }
  }
  .reduxFormBtn {
    width: 80%;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    padding: 1rem;
    .input-container {
      width: 100%;
    }

    .Btn {
      width: 100%;
    }
  }
`;

export default CustomFormStyle;
