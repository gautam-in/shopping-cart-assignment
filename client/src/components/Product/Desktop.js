import { Fragment } from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';
import ImageComponent from "./ImageComponent";
import Button from "../Button/Button";
import P from "../Typography/P";
import H3 from "../Typography/H3";

const Card = Styled.div`
    width: 25%;
    padding: 20px;
    box-shadow: 10px 0 20px -15px rgba(0, 0, 0, 0.15);
    display: none;
    min-height: 540px;
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
    max-height: 100px;
    overflow: auto;
`;

const Description = Styled.div`
  background-color: #f0f0f0;
  height: auto;
  min-height: 120px;
  padding: 5px;
  overflow: auto;
  max-height: 120px;

`;



const CTAContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
`;

const Desktop = ({ data, key, handleProductClick }) => {
  return (
    <Fragment>
      <Card key={key}>
        <Title>
          <H3>{data.name}</H3>
        </Title>
          <ImageComponent src={data.imageURL} alt={data.name} width={100} height={100} />
        <Description>
          <P>{data.description}</P>
        </Description>
        <CTAContainer>
          <P>{`MRP Rs.${data.price}`}</P>
          <Button onClick={() => handleProductClick(data)}>Buy Now</Button>
        </CTAContainer>
      </Card>
    </Fragment>
  );
};

Desktop.propTypes = {
  data: PropTypes.object,
  handleProductClick: PropTypes.func,
  key: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}

Desktop.defaultProps = {
  data: {},
  handleProductClick: () => {},
  key: 0
}

export default Desktop;
