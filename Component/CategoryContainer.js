import { useRouter } from "next/router";
import {
  CategoryContainer,
  ImageConatiner,
  ContentContainer,
} from "./styles/CategoryStyles";
import CustomButton from "./atom/CustomButton";

export default function Category({ category }) {
  const router = useRouter();
  const handleRouting = (categoryId) => {
    router.push(`/products?category=${categoryId}`);
  };
  return (
    <CategoryContainer
      reverse={category.order % 2 === 0}
      order={category.order}
    >
      <ImageConatiner>
        <img src={category.imageUrl} alt={category.name} loading="lazy" />
      </ImageConatiner>
      <ContentContainer>
        <p>{category.name}</p>
        <div>{category.description}</div>
        <CustomButton clickHandler={() => handleRouting(category.id)}>
          {`Explore ${category.key}`}
        </CustomButton>
      </ContentContainer>
    </CategoryContainer>
  );
}
