import { Fragment } from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';
import ImageComponent from "./ImageComponent";
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

const Description = Styled.div`
  height: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  overflow: auto;
  min-height: 160px;
  max-height: 160px;
`;

const ContentContainer = Styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;

const DescriptionContainer = Styled.div`
  width: 100%;
  height: auto;
`;

const Tablet = ({ data, key, handleProductClick }) => {
  return (
    <Fragment>
      <Card key={key}>
        <Title>
          <H3>{data.name}</H3>
        </Title>
        <ContentContainer>
            <ImageComponent
              src={data.imageURL}
              alt={data.name}
              width={100}
              height={100}
              containerWidth={'100%'}
            />
          <DescriptionContainer>
            <Description>
              <P>{data.description}</P>
            </Description>
          </DescriptionContainer>
        </ContentContainer>
        <Button onClick={() => handleProductClick(data)}>Buy Now</Button>
      </Card>
    </Fragment>
  );
};

Tablet.propTypes = {
  data: PropTypes.object,
  handleProductClick: PropTypes.func,
  key: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}

Tablet.defaultProps = {
  data: {},
  handleProductClick: () => {},
  key: 0
}

export default Tablet;
