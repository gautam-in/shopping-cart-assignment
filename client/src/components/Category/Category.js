import { Fragment } from "react";
import Styled from "styled-components";
import { isUndefined } from "lodash";
import FallbackImage from "../../fallbackImage/fallback_image.jpg";
import Button from "../Button/Button";
import H1 from "../Typography/H1";

const CategoryContainer = Styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.45);

  &:last-child {
    box-shadow: 0px 0px;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const CategoryImageContainer = Styled.div`
  width: 40%;
`;

const CategoryImage = Styled.img`
      width: 100%;
      height: auto;
`;

const CategoryHeaderContainer = Styled.div`
  padding: 20px 0;
`;

const CategoryDescription = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    width: 60%;

`;

const P = Styled.p`
      margin-bottom: 30px;
      text-align: center;
      font-weight: 600;
      margin-top: 0;
      max-width: 50%;
`;

const ButtonContainer = Styled.div`
  max-width: 100%;
`;

const Category = ({
  data: { imageUrl, name, description, id, key },
  handleClick,
}) => {
  return (
    <Fragment>
      <CategoryContainer key={id}>
        <CategoryImageContainer>
          <CategoryImage
            src={!isUndefined(imageUrl) ? imageUrl : FallbackImage}
            alt={name}
          />
        </CategoryImageContainer>
        <CategoryDescription>
          <CategoryHeaderContainer>
            <H1 alignCenter>{name}</H1>
          </CategoryHeaderContainer>
          <P>{description}</P>
          <ButtonContainer>
            <Button onClick={() => handleClick()}>{`Explore ${key}`}</Button>
          </ButtonContainer>
        </CategoryDescription>
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
