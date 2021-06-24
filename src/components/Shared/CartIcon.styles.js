import styled from "styled-components";

export const Container = styled.div`
  width: 110px;
  background: lightgray;
  padding: 1rem 0.7rem;
  align-items: center;
  display: flex;
  cursor: pointer;
  img {
    width: 24px;
    margin-right: 0.2rem;
    filter: invert(15%) sepia(96%) saturate(4488%) hue-rotate(324deg)
      brightness(79%) contrast(93%);
  }
`;
