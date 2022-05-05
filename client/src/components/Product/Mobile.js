import { Fragment } from "react";
import Styled from "styled-components";
import Button from "../Button/Button";
import H3 from "../Typography/H3";
import P from "../Typography/P";

const Card = Styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 10px 0 20px -15px rgba(0, 0, 0, 0.15);
    display: none;
   @media (max-width: 766px){
      display: inline-block;
    }
`;

const Title = Styled.div`
    margin: 10px 0 20px 0;
`;

const Image = Styled.img`
  width: 100%;
  height: auto;
`;

const Description = Styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  height: auto;
  min-height: 120px;
  padding: 5px;
  overflow: hidden;
`;

const ContentContainer = Styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
`;

const ImageContainer = Styled.div`
  width: 100%;
`;

const CTAContainer = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = ({ data, key, handleClick}) => {
  return (
    <Fragment>
      <Card key={key}>
        <Title>
          <H3>{data?.name}</H3>
        </Title>
        <ContentContainer>
          <ImageContainer>
            <Image src={data?.imageURL} alt={data?.name} />
          </ImageContainer>
          <CTAContainer>
            <Description>
              <P>{data?.description}</P>
            </Description>
            <Button onClick={() => handleClick(data)}>Buy Now</Button>
          </CTAContainer>
        </ContentContainer>
      </Card>
    </Fragment>
  );
};

export default Product;
