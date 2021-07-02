import { useRouter } from "next/router";
import {CategoryContainer,ImageConatiner,ContentContainer} from "../styles/CategoryStyles"
import CustomButton from "../atom/CustomButton";



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
