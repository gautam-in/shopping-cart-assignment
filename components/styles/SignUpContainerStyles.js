import styled from "styled-components";

export const SignUpContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Container = styled.div`
  text-align: end;
  margin-bottom: 0.5rem;
  span{
    margin: 0 0.25rem;
    cursor: pointer;
  }
  a {
    margin-left: 1rem;
  }
  @media only screen and (max-width: 767px){
      display: none;
  }
`;

export const CartBtn = styled.div`
  background: #eee;
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  width: 70%;
  align-self: flex-end;
  img{
    filter: invert(19%) sepia(75%) saturate(3402%) hue-rotate(333deg) brightness(81%) contrast(89%);
      width: 15%;
  }
  @media only screen and (max-width:767px){
      flex: 1;
  }
`;

