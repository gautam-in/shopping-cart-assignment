import styled from "styled-components";

export const ProductsContainer = styled.main`
  /* display: flex; */
  /* justify-content: flex-start; */
  display: block;
  @media (min-width: 461px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const CategoryDrop = styled.div`
  width: 100%;
  background-color: aliceblue;
  margin-top: 20px;
  select {
    background-color: var(--brickRed);
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    padding: 10px;
    color: var(--white);
    font-size: 0.9rem;
  }

  @media (min-width: 461px) {
    display: none;
  }
`;

export const LeftNav = styled.nav`
  display: none;
  min-width: 100px;
  width: 20%;
  padding-left: 10px;
  background-color: var(--lightGray);
  ul {
    list-style: none;

    li {
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      padding: 20px 10px;
      a {
        color: #595959;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  @media (min-width: 461px) {
    display: block;
  }
`;

export const ProductList = styled.div`
  flex: 1;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;

  .card {
    width: 100%;
    min-width: 100%;
    margin: 0 5px 5px 0;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px dotted var(--dark);
    &::after {
      content: "";
      position: absolute;
      width: 20%;
      height: 80%;
      top: 10%;
      right: 0%;
      box-shadow: 0px 0px 5px var(--gray);
      z-index: -1;
    }

    h4 {
      flex: 1;
    }
    .productContent {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      img {
        width: 50%;
        max-width: 150px;
        max-height: 150px;
      }
      p {
        background-color: var(--lightGray);
        margin-top: 5px;
        padding: 2px 5px;
        height: 148px;
        overflow: hidden;
      }
      .productDescription {
        width: 50%;
        display: none;
      }
      div {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        div {
          display: none;
          flex: 1;
          text-shadow: 0px 0px 1px var(--darkGray);
          padding: 5px;
        }
        .BuyBtn {
          display: none;
        }
        .BuyBtnTablet {
          width: 100%;
        }
        .BuyBtnMobile {
          flex: 1;
        }
      }
    }

    @media (min-width: 461px) {
      width: calc(50% - 5px);
      min-width: 180px;
      .productContent {
        .productDescription {
          width: 50%;
          display: block;
        }
        .productDescriptionMob {
          display: none;
          flex-direction: row;
        }
        div {
          width: 100%;
        }
      }
    }

    @media (min-width: 769px) {
      width: calc(25% - 5px);
      min-width: 25%px;
      .productContent {
        img {
          width: 100%;
        }
        .productDescription {
          width: 100%;
        }
        div {
          display: flex;
          flex-direction: row;
          div {
            display: block;
          }
          .BuyBtn {
            display: block;
          }
          .BuyBtnTablet {
            display: none;
          }
        }
      }
    }
  }
`;
