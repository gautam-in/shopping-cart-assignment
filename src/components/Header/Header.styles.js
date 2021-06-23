import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 3px 6px rgb(175 175 175 / 40%);
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 0.8rem;
  position: fixed;
  top: 0;
  height: 85px;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;
  .logo {
    width: 9rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 990px) {
    justify-content: space-between;
    .logo {
      width: 8rem;
    }
  }
  @media (max-width: 650px) {
    height: auto;
    .logo {
      width: 6rem;
    }
  }
`;
