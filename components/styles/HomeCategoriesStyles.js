import styled from "styled-components";

const HomeCatageroiesStyles = styled.section`
  .categories{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    padding-right: 5vw;
    /* border: 2px solid black; */
    background-color: #fff;

    > * {
      &::nth-child(1) {
        flex: 1 1 70%;
        justify-content: space-around;
        min-width: 25ch;
        margin-top: 20px;
      }
      &::nth-child(2) {
        flex: 1 1 30%;
        align-self: flex-start;
        min-width: 22ch;
        margin-right: 10vw;
      }
    }
  }

  .shadow {
    position: relative;
  }

  .shadow:before {
    content: "";
    z-index: -2;
    position: absolute;
    top: 50%;
    left: 12px;
    right: 12px;
    bottom: 0;
    box-shadow:0px 0px 10px 4px rgba(0, 0, 0, 0.24);
  
    
    border-radius: 500%/ 30px;
  }

  .categories-image {
    width: 30vw;
    margin-left: 10px;
    margin-top: 20px;
  }

  .categories-title,
  .categories-heading {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  button {
    background-color: var(--primary-color);
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
  }
`;

export default HomeCatageroiesStyles;
