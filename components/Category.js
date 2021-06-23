import { useRouter } from "next/router";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const CategoryContainer = styled.section`
  padding: 2rem;
  margin: 2% 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  order: ${(props) => props.order};
  box-shadow: 0px 3px 6px rgb(138 135 135 / 40%);

  @media only screen and (max-width: 767px){
      padding: 1rem;
  }
`;

const ImageConatiner = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 2;
  div {
    margin-bottom: 6%;
    text-align: center;
  }
`;

export default function Category({ category }) {
    const router = useRouter()
  return (
    <CategoryContainer reverse={category.order % 2 === 0} order={category.order}>
      <ImageConatiner>
        <img src={category.imageUrl} alt={category.name} />
      </ImageConatiner>
      <ContentContainer>
        <h3>{category.name}</h3>
        <div>{category.description}</div>
        <CustomButton clickHandler={() => router.push(`/products?category=${category.id}`)} text={`Explore ${category.key}`}></CustomButton>
      </ContentContainer>
    </CategoryContainer>
  );
}
