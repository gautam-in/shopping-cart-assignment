import styled from "styled-components";

export const CartContainer = styled.main`
  position: fixed;
  top: 85px;
  left: 0px;
  width: 100vw;
  height: calc(100vh - 85px);
  background-color: transparent;
  z-index: 5;

  @media (min-width: 769px) {
    top: 0px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }
  .cartScreen {
    width: 100%;
    height: 100%;
    top: 0px;
    margin: 0 auto;
    max-width: var(--maxWidth);
    position: relative;
    @media (min-width: 769px) {
      height: calc(100% - 95px);
      width: var(--containerWidth);
      top: 95px;
    }
    .cartBox {
      height: 100%;
      max-height: 1000px;
      width: 100%;
      background-color: var(--lightGray);
      position: absolute;
      bottom: 0px;
      right: 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-stretch;
      align-items: stretch;

      @media (min-width: 769px) {
        width: 400px;
      }

      div {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .cartHeader {
        background-color: white;
        color: var(--black);
        font-weight: bold;

        span,
        p:nth-of-type(2) {
          font-size: 0.9rem;
          font-weight: normal;
        }
        p:nth-of-type(2) {
          visibility: hidden;
          cursor: pointer;
        }

        @media (min-width: 769px) {
          background-color: var(--black);
          color: var(--white);
          p:nth-of-type(2) {
            visibility: visible;
          }
        }
      }

      .cartContent {
        padding: 0px;
        flex: 1;
        height: 100%;
        overflow-y: auto;
        div {
          display: block;
          width: 100%;
        }
        .noItem {
          text-align: center;
          width: 100%;
          font-weight: bold;
          font-size: 1.2rem;
          p:nth-of-type(2) {
            font-weight: 80;
            font-size: 1rem;
          }
        }
        div {
          padding: 0px;
        }
        .cartItems {
          div {
            display: flex;
          }
          height: 100%;
          width: 100%;

          .cartLowestPrice {
            display: flex;
            flex: 1;
            justify-content: space-evenly;
            width: calc(100% - 20px);
            padding: 10px;
            background-color: white;
            margin: 10px;
            img {
              width: 100px;
            }
          }

          .cartItemRow {
            width: 100%;
            background-color: white;
            margin: 5px 0px;
            padding: 5px;
            img {
              width: 100px;
              height: 100px;
            }
            .cartItemContent {
              flex: 1;
              flex-direction: column;
              align-items: flex-start;
              padding: 10px;
              .cartItemDetail {
                justify-content: space-between;
                .cartItemAmount {
                  justify-content: space-between;
                  width: 60%;
                  button {
                    padding: 5px;
                    margin: 0px;
                    font-size: 20px;
                    line-height: 15px;
                    border-radius: 2px;
                    width: 25px;
                    text-align: center;
                  }
                  span {
                    font-size: 0.9rem;
                  }
                }
                span {
                  font-size: 1.1rem;
                }
              }
            }
          }
        }
      }

      .cartFooter {
        border-top: 2px solid rgba(0, 0, 0, 0.1);
        background-color: white;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        button {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 15px;
          font-weight: 100;
          margin: 0px;
          margin-top: 10px;
        }
      }
    }
  }
`;
