import styled from "styled-components";

export const ShopContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 100px;
  display: flex;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.div`
  width: 25%;
  min-height: 800px;
  background-color: #f2f2f2;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const Category = styled.div`
  border-bottom: 1px solid grey;
  padding: 15px 0 15px 30px;
  color: grey;
  cursor: pointer;
`;

export const SideBarMob = styled.select`
  display: none;
  @media screen and (max-width: 580px) {
    display: block;
    font-size: 18px;
    color: white;
    background-color: rgb(237, 27, 62);
    padding: 0 0 0 15px;
    width: 100%;
    height: 60px;
  }
`;
