import styled from "styled-components";

export const NoItem = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartHeader = styled.header`
  color: white;
  display: flex;
  align-items: center;
  padding: 1% 3%;
  background: var(--black);
  h4 {
    flex: 1;
  }
  svg {
    cursor: pointer;
  } 
  @media (max-width: 1023px) {
    background-color: var(--white);
    color: black;
  }
`;

export const CartContainer = styled.main`
  max-height: 50vh;
  overflow-y: auto;
  .scroller {
    scrollbar-width: thin;
  }
`;

export const LowerItemSection = styled.section`
  background-color: white;
  display: flex;
  margin: 0.5rem;
`;

export const CartFooter = styled.footer`
  background-color: var(--white);
  color: black;
  position: fixed;
  bottom: 100px;
  width: 100%;
  padding: 2%;
  text-align: center;
  p {
    margin-bottom: 2%;
    margin-top: 0;
  }
  .checkout-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .checkout-btn span {
    flex: 1;
    text-align: end;
  }
  .shopping-btn {
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    bottom: 50px;
  }
`;
export const CartStyles = styled.div`
  position: fixed;
  height: 100%;
  top: 100px;
  right: 0;
  width: 40%;
  bottom: 0;
  background: var(--lightestgrey);
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 5;
  ${(props) => props.open && `transform: translateX(0);`};
 
  @media only screen and (max-width: 1023px) {
    font-size: 0.8em;
    right: -999999;
    width: 100%;
    padding-top:2rem;
  }
  @media only screen and (max-width: 767px) {
    font-size: 0.8em;
    top: 50px;
    right: -999999;
    width: 100%;
   
  }
`;

