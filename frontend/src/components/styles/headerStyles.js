import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 40%);
  .logo {
    max-width: 150px;
    padding: 15px 0;
  }
  a {
    padding: 0 15px;
    display: inline-block;
    font-size: 20px;
  }
`;

export const NavStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  @media only screen and (min-width: 768px) {
    padding-left: 60px;
  }
  .bar {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
    a {
      font-size: 14px;
    }
  }
  .sub-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 767px) {
      a{
        font-size: 14px;
      }
     
    }
  }
`;
export const CartButton = styled.button`
  background-color: var(--grey);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  min-width: 100px;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    width: 110px;
  }
  img {
    max-width: 25px;
  }
`;
