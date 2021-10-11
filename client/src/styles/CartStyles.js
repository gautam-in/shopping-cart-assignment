import styled from "styled-components";

const CartStyles = styled.div`
  position: relative;
  position: fixed;
  overflow-y: auto;
  height: 100vh;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 2;
  cursor: pointer;
  ${(props) => props.open && `transform: translateX(0);`};
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
    min-width: 100vw;
  }
`;

const CartContentWrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100%;
  header {
    color: var(--white);
    padding: 0.25rem 1.5rem;
    background-color: var(--cartheader-background-color);
    display: flex;
    justify-content: space-between;
  }
  background-color: var(--grey);
  section {
    background: var(--grey);
    min-height: calc(100% - 160px);
  }
  footer {
    background-color: var(--white);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      height: 50px;
      background-color: var(--button-color);
      border: 0;
      padding: 1rem 2rem;
      width: 400px;
      display: flex;
      justify-content: space-between;
      color: var(--white);
      border-radius: 4px;
    }
  }
`;
const CloseButton = styled.button`
  background-color: var(--cartheader-background-color);
  color: var(--white);
  font-size: 2rem;
  border: 0;
  padding: 0;
`;

const CartWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(36 47 67 / 60%);
  overflow-y: scroll;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  ${(props) => !props.open && `display:none`};
`;

const CartItemStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: end;
  img {
    width: 100px;
    height: 100px;
  }
  padding: 1rem;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    margin: 0 0.25rem;
  }
`;

const CartButton = styled.button`
  border: none;
  background-color: var(--button-color);
  text-transform: none;
  display: inline;
  height: auto;
  cursor: pointer;
  margin: 0;
  padding: 1rem;
  border-radius: 50%;
  text-decoration: none;
  margin: 0 0.5rem;
  color: var(--white);
`;

const CartDescription = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  min-width: 250px;
  @media (max-width: 480px) {
    min-width: auto;
  }
`;

const LowestPriceBanner = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: var(--white);
  justify-content: space-evenly;
  img {
    width: 160px;
    height: 50px;
  }
`;

const NoItems = styled.div`
  text-align: center;
`;
export {
  CartStyles,
  CloseButton,
  CartWrapper,
  CartItemStyle,
  CartButton,
  CartDescription,
  CartContentWrapper,
  LowestPriceBanner,
  NoItems,
};
