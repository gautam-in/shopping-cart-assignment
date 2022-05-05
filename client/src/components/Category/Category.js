import Styled from "styled-components";
import Button from "../Button/Button";
import H2 from "../Typography/H2";

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

const Category = ({ data: {imageUrl, name, description, id }}) => {
  return (
    <>
      <CategoryContainer key={id}>
        <CategoryImageContainer>
          <CategoryImage src={imageUrl} alt={name} />
        </CategoryImageContainer>
        <CategoryDescription>
          <H2 alignCenter>{name}</H2>
          <P>{description}</P>
          <ButtonContainer>
            <Button onClick={() => console.log("hello")} />
          </ButtonContainer>
        </CategoryDescription>
      </CategoryContainer>
    </>
  );
};

export default Category;
