import styled from "styled-components";

export const ItemCard = styled.div`
  width: 25%;
  height: 450px;
  border: 1px solid #eeeeee;
  font-size: 85%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 10px;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    height: 300px;
    width: 50%;
    flex-direction: row;
    padding: 0;
    button {
      width: 90%;
    }
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 100%;
    height: 250px;
  }
`;

export const Title = styled.h4`
  height: 15%;
  width: 100%;
  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    height: 5%;
    padding: 10px;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 50%;
    height: 20%;
    font-size: 85%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    min-width: 90%;
    max-width: 90%;
    min-height: 90%;
    max-height: 90%;
  }

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 50%;
    height: 50%;
    img {
      min-width: 80%;
      max-width: 80%;
      min-height: 90%;
      max-height: 90%;
    }
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 50%;
    height: 60%;
    img {
      min-width: 80%;
      max-width: 80%;
      min-height: 90%;
      max-height: 90%;
    }
  }
`;

export const Description = styled.p`
  height: 30%;
  background-color: #eeeeee;
  padding: 10px;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 50%;
    height: 50%;
    font-size: 80%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 50%;
    height: 50%;
    font-size: 75%;
  }
`;

export const Options = styled.div`
  flex: 1;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 110%;
    font-weight: bold;
  }

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    justify-content: center;
  }
`;