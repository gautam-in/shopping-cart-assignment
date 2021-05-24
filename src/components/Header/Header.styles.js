import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 3px 6px rgb(175 175 175 / 40%);
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 0.8rem;
  position: fixed;
  height: 90px;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  .logo {
    width: 15%;
    margin-bottom: 0.5rem;
  }
`;
