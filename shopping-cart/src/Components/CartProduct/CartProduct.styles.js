import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 100px;
  display: flex;
  align-items: center;
  flex: 1 1 auto;

  margin: 15px 0;
`;

export const ItemImg = styled.img`
  width: 85px;
  height: 85px;
  margin: 0 20px;
`;

export const Details = styled.div`
  height: 65px;
  width: 65%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const PriceChange = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
`;

export const Btn = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  outline: none;
  background-color: rgb(237, 27, 62);
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
  padding-bottom: 30px;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  margin-right: 10px;
`;
