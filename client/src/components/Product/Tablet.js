import { Fragment } from "react";
import Styled from "styled-components";
import Button from "../Button/Button";
import H3 from "../Typography/H3";
import P from "../Typography/P";

const Card = Styled.div`
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ccc;
    box-shadow: 10px 0 20px -15px rgba(0, 0, 0, 0.15);
    display: none;
   @media (min-width: 767px) and (max-width: 1024px){
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
  height: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  overflow: hidden;
`;

const ContentContainer = Styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;

const ImageContainer = Styled.div`
  width: 100%;
`;

const DescriptionContainer = Styled.div`
  width: 100%;
  height: auto;
`;

const Tablet = ({ data, key, handleClick }) => {
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
          <DescriptionContainer>
            <Description>
              <P>{data?.description}</P>
            </Description>
          </DescriptionContainer>
        </ContentContainer>
        <Button onClick={() => handleClick(data)}>Buy Now</Button>
      </Card>
    </Fragment>
  );
};

export default Tablet;
