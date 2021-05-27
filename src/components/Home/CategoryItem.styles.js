import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 0 0;
`;

export const CategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.2rem;
  height: 200px;
  /* box-shadow: inset 0 2px 7px rgba(0, 0, 0, 0.3); */
  flex-direction: ${(props) => props.reverse && "row-reverse"};
  position: relative;
  border-top: 1px solid #d3d3d3;
  .detail-img {
    text-align: center;
  }
  .detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 105%;
    height: 160px;
    div {
      font-size: 0.8rem;
    }
    .detail-name {
      font-weight: 600;
      font-size: 1rem;
    }
    @media (max-width: 650px) {
      div {
        font-size: 0.5rem;
      }
    }
  }
  .home-btn {
    text-transform: initial;
  }
`;
