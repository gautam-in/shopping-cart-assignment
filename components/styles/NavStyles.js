import styled from "styled-components";

const NavStyles = styled.header`
  background-color: #fff;
  width: 100vw;
  height: 10rem;
  padding: 0 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 2.6px;
  margin-bottom: 0;
  z-index: 1;
  

  .container-header {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width);
    align-items: center;
    width: 100%;
    margin: 0 auto;


    .container {
      width: 70%;
      height: 100%;
      position: relative;
      padding: 1rem;
      .menu-right {
        position: absolute;
        right: 0;
        a{
          margin: 10px;
        }
      
      }
      .menu-left {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        margin-bottom: 0px;
        a{
          margin: 10px;
        }

        .cart-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 100px;
          background-color: var(--light-grey);
          img{
            height: 50px;
            width: 50px;
          }

          
        }
      }
    }

    @media screen and (max-width:800px){
      .menu-right{
        visibility: hidden;
      }
      .menu-left-container{
        visibility: hidden;
      };
      
      
    }
  }
`;


export default NavStyles