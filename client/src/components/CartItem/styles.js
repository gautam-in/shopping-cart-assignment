import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  height: 100px;
  width: 98%;
  padding: 10px;
  font-size: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    padding: 40px;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    padding: 5px;
    font-size: 85%;
  }
`;

export const ImgContainer = styled.div`
  height: 80px;
  width: 80px;
  img {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  p {
    font-size: 85%;
    font-weight: 600;
  }
`;

export const QtyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const QtyBtn = styled.button`
  background-color: #BF2957;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
`;

export const TotalPrice = styled.p`
  align-self: flex-end;
  font-size: 100%;
  font-weight: 600;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    font-size: 120%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    font-size: 110%;
  }
`;