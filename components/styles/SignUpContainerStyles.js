import styled from "styled-components";

const SignUpContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .signIn-container {
    text-align: end;
    margin-bottom: 0.5rem;
    span {
      margin: 0 0.25rem;
      cursor: pointer;
    }
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  .signIn-container a {
    margin-left: 1rem;
  }
  .cart-btn {
    background: #eee;
    flex: 0 0 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    width: 70%;
    align-self: flex-end;
    @media only screen and (max-width: 767px) {
      flex: 1;
    }
  }
  .cart-btn img {
    filter: invert(19%) sepia(75%) saturate(3402%) hue-rotate(333deg)
      brightness(81%) contrast(89%);
    width: 15%;
  }
`;

export default SignUpContainerStyles;
