import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  margin: 0.5rem 0.5rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted #d3d3d3;
  .product-name {
    min-height: 50px;
  }
  .description {
    background-color: #d3d3d3;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.5rem;
    min-height: 85px;
  }
  .product-footer {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.2rem 0;
  }
`;
