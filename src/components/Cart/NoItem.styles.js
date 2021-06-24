import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .no-item {
    text-align: center;
    div {
      font-size: 0.8rem;
    }
  }
  .shopping {
    position: absolute;
    bottom: 0.5rem;
    width: 90%;
    text-transform: initial;
  }
`;
