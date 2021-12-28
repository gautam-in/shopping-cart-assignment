import styled from "styled-components";

export const ItemCard = styled.div`
  width: 25%;
  height: 450px;
  border: 1px solid #eeeeee;
  font-size: 85%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Title = styled.h4`
  height: 15%;
`;

export const ImgContainer = styled.div`
  width: 90%;
  height: 35%;
  img {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.p`
  height: 30%;
  background-color: #eeeeee;
  padding: 10px;
`;

export const Options = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 110%;
    font-weight: bold;
  }
`;