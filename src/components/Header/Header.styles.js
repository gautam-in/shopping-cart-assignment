import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 3px 6px rgb(175 175 175 / 40%);
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 0.8rem;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;
  padding-top: 1rem;
  .logo {
    width: 12%;
    margin-bottom: 0.5rem;
  }
`;
