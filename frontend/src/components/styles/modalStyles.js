import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
`;

export const CartModalStyles = styled.div`
  .cart-container {
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    max-width: 530px;
    z-index:11;
    background: white;
    right: 0;
    @media only screen and (min-width: 1200px) {
      right: calc((100% - 1300px) / 2 + 30px);
  }
    .cart-header {
      background: #1c2124;
      color: var(--offWhite);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      font-size: 18px;
      span {
        display: inline-block;
        cursor: pointer;
        font-size: 30px;
      }
    }
    .cart-items {
      background: var(--grey);
      padding: 15px 15px 60px 15px;
      overflow: auto;
      height: inherit;

      .cart-item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 5px;
        border-bottom: 1px dotted var(--black);
        img {
          height: 50px;
          width: 50px;
        }
        >div{
          margin-left: 20px;
          flex:1;
          h4{
            margin: 0 0 5px 0;
          }
          button{
            padding: 8px;
            border-radius: 4px;
          }
          span{
            margin: 0 15px;
          }
        }
      }
    }
    .checkout {
      position: absolute;
      bottom: 0;
      padding: 15px;
      background: white;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      a{
        flex: 1;
        color:white;
        background: var(--red);
        padding: 15px;
        justify-content: space-between;
        display: flex;
      }
    }
  }
`;
