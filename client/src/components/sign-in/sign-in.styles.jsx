import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    form {
      flex: 0.7;
      justify-content: center;
      /* width: 50%; */
      box-sizing: border-box;
    }
  }
`;

export const SignInTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (min-width: 768px) {
    /* flex: ; */
    /* flex: 0.4; */
    /* margin-right: 2em; */
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
