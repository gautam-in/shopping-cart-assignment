import {Fragment} from "react";
import Styled from "styled-components";
import Button from "../Button/Button";
import P from "../Typography/P";
import H3 from "../Typography/H3";

const Card = Styled.div`
    width: 25%;
    padding: 10px;
    box-shadow: 10px 0 20px -15px rgba(0, 0, 0, 0.15);
    display: none;
    min-height: 600px;
   @media (min-width: 1026px){
      display: inline-block;
    }

    @media (max-width: 480px) {
      width: 100% !important;
      box-shadow: none;
      margin: 0;
  }
    @media (max-width: 768px) {
        width: 50%;
    }
`;

const Title = Styled.div`
    margin: 10px 0 20px 0;
    height: 50px;
    max-height: 80px;
`;

const Description = Styled.div`
  background-color: #f0f0f0;
  height: auto;
  min-height: 120px;
  padding: 5px;
  overflow: auto;
  max-height: 120px;

`;

const ImageContainer = Styled.div``;

const Image = Styled.img`
  width: 100%;
  height: auto;
`;

const CTAContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
`;

const Desktop = ({ data, key, handleClick}) => {
  return (
    <Fragment>
      <Card key={key}>
        <Title>
          <H3>{data.name}</H3>
        </Title>
        <ImageContainer>
          <Image src={data.imageURL} alt={data.name} />
        </ImageContainer>
        <Description>
          <P>{data.description}</P>
        </Description>
        <CTAContainer>
          <P>{`MRP Rs.${data.price}`}</P>
          <Button onClick={() => handleClick(data)}>Buy Now</Button>
        </CTAContainer>
      </Card>
    </Fragment>
  );
};

export default Desktop;
