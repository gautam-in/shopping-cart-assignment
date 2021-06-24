import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  margin: 0.5rem 0.5rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted #d3d3d3;
  .product-name {
    min-height: 50px;
  }
  .product-wrap {
    img {
      height: 180px;
    }
    .description {
      background-color: #d3d3d3;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.5rem;
      min-height: 85px;
    }
  }
  .product-footer {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.2rem 0;
  }
  .tablet-footer,
  .mobile-footer {
    display: none;
  }
  @media (max-width: 1100px) {
    width: 190px;
  }
  @media (max-width: 990px) {
    width: 45%;
    .product-wrap {
      display: flex;
      img {
        height: 120px;
      }
      .description {
        padding: 0.2rem 0.3rem;
      }
    }
    .tablet-footer {
      display: block;
    }
    .product-footer {
      display: none;
    }
    .mobile-btn {
      margin-top: 0.5rem;
      width: 100%;
    }
  }
  @media (max-width: 650px) {
    width: 90%;
    justify-content: center;
    .product-wrap img {
      height: auto;
      width: 40%;
      margin-right: 1rem;
    }
    .mobile-footer {
      display: block;
    }
    .tablet-footer {
      display: none;
    }
  }
`;
