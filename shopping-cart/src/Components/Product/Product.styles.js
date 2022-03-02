import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  width: 23%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 15px 17px;
  border-bottom: 1.5px dotted grey;
  box-sizing: border-box;

  //tablet-view
  @media (min-width: 1200px) and (max-width: 1430px) {
    width: 30%;
  }
  @media screen and (max-width: 1200px) {
    width: 45%;
    height: 300px;
    position: relative;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 250px;
    position: relative;
    margin: 20px 0 0 0;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  height: 20%;
  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 0;
  }
`;

export const ProductImage = styled.img`
  width: 220px;
  height: 180px;

  @media screen and (max-width: 1200px) {
    width: 46%;
    height: 160px;
    position: absolute;
    left: 16px;
  }
  @media screen and (max-width: 580px) {
    width: 46%;
    height: 70%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const Description = styled.div`
  width: 220px;
  height: 60px;
  background-color: #f2f2f2;
  margin: 15px 0;
  font-size: 12px;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    width: 46%;
    height: 160px;
    position: absolute;
    right: 16px;
  }
  @media screen and (max-width: 580px) {
    width: 46%;
    height: 100px;
    position: absolute;
    right: 0;
  }
`;

export const Price = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 100px;
  background-color: rgb(237, 27, 62);
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
  cursor: pointer;

  @media (min-width: 580px) and (max-width: 1200px) {
    width: 100%;
    height: 38px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width: 580px) {
    width: 46%;
    height: 60px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 10px;
  }
`;

export const AtPrice = styled.span`
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
