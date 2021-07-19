import Link from "next/link";
import {
  CategoryContainer,
  CategoryDetails,
  CategoryImage,
  Description,
  StyledLink,
  Title,
} from "./styled";

export default function CategoriesCard({ categories }) {
  const { key, name, description, imageUrl } = categories;
  console.log(categories);

  return (
    <>
      <CategoryContainer>
        <CategoryImage src={imageUrl} alt={name} />
        <CategoryDetails>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Link href="/products">
            <StyledLink> Explore {key}</StyledLink>
          </Link>
        </CategoryDetails>
      </CategoryContainer>
    </>
  );
}
