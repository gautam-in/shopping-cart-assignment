import styled from "styled-components";

export const ErrorStyleMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .error{
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    overflow: auto;
    background-color: rgba(255,0,0,0.8);
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
    box-shadow: 0px 0px 15px var(--darkGray);
    color: white;
  }
`