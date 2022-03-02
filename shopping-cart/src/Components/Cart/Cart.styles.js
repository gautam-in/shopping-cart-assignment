import styled from "styled-components";

export const CartContainer = styled.div`
  margin-right: 100px;
  position: absolute;
  right: 0;
  top: 100px;
  height: 88vh;
  width: 600px;
  z-index: 1;
  background-color: #f2f2f2;

  //tablet-view
  @media screen and (max-width: 1200px) {
    margin-right: 0;
    width: ${(p) => p.width}px;
    height: 94vh;
    top: 90px;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    width: ${(p) => p.width}px;
    height: 94vh;
    top: 70px;
  }
`;

export const CartHeader = styled.div`
  height: 8%;
  background-color: rgb(29, 27, 27);
  display: flex;
  align-items: center;
  color: white;
  flex: 1 1 auto;

  //tablet-view
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
    background-color: white;
    color: black;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    margin-top: 10px;
    background-color: white;
    color: black;
  }
`;

export const CartClose = styled.div`
  position: absolute;
  right: 15px;
  font-weight: bold;
  cursor: pointer;

  //tablet-view
  @media screen and (max-width: 1200px) {
    display: none;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const CartTitle = styled.div`
  margin: 0 5px 0 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const Slogan = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  height: 50px;
  background-color: white;
`;

export const SloganImg = styled.div`
  margin-left: 15px;
`;

export const SloganTxt = styled.div`
  margin-left: 20px;
`;

export const Checkout = styled.div`
  position: inherit;
  bottom: 0;
  height: 90px;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const CheckoutBtn = styled.div`
  display: flex;
  justify-content: ${(props) => {
    return props.className === "noitemBtn" ? "center" : "space-between";
  }};
  align-items: center;
  width: 95%;
  height: 40px;
  background-color: rgb(237, 27, 62);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-left: ${(props) => {
    return props.className === "noitemBtn" ? "15px" : null;
  }}; ;
`;

export const BtnText = styled.div`
  margin: 0 15px;
`;

export const CartList = styled.div`
  height: 80%;
  overflow-y: auto;
`;

export const NoItem = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
