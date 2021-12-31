import styled from "styled-components";

import Button from "../Button/Button";

export const ItemCard = styled.div`
  width: 100%;
  height: 280px;
  font-size: 95%;
  display: flex;
  flex-direction: ${props => props.dir === "left" ? "row" : "row-reverse"};
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    padding: 10px;
    height: 200px;
    font-size: 85%;
    column-gap: 10px;
  }
`;

export const ImageContainer = styled.div`
  height: 180px;
  width: 320px;
  img {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 45%;
    height: 45%;
  }
  
  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 40%;
    height: 55%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  text-align: center;

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 55%;
    row-gap: 10px;
    font-size: 90%;
  }
`;

export const CustomButton = styled(Button)`
  min-width: 100px;
  max-width: 300px;

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    padding: 10px;
    font-size: 85%;
    font-weight: 600;
  }
`;
