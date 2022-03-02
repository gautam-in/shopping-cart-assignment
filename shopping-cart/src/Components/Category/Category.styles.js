import styled from "styled-components";

export const CatgoryContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => {
    return props.order % 2 === 0 ? "row-reverse" : "row";
  }};
  width: 100%;
  height: 18%;
  justify-content: space-between;
  margin: 15px 0;
  box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.3);
  @media screen and (max-height: 830px) {
    height: 22%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 200px;
  @media screen and (max-width: 1250px) {
    width: 180px;
  }
  @media screen and (max-width: 580px) {
    width: 120px;
    height: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 300px;
  width: 70%;
  margin: 10px 0;
  @media screen and (max-width: 580px) {
    width: 80%;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  font-size: 10px;
  height: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 580px) {
    font-size: 8px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  height: 30px;
  min-width: 150px;
  margin: 15px 0;
  background-color: rgb(237, 27, 62);
  color: white;
  padding: 10px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;
