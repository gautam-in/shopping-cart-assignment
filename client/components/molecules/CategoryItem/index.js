import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../../atoms/Button";
import {
  CategoryItemDescription,
  CategoryItemWrapper,
} from "./CategoryItem.styles";
import { useCallback } from "react";

const CategoryItem = ({ categoryItem }) => {
  if (!categoryItem.imageUrl) return null;

  const router = useRouter();

  const onExploreButtonClick = useCallback((e) => {
    const categoryId = e.target.id;
    router.push(`/products?selectedCategory=${categoryId}`, "/products");
  });

  return (
    <CategoryItemWrapper>
      <div>
        <Image
          src={categoryItem?.imageUrl}
          alt={categoryItem.name}
          height="500"
          width="800"
          layout="responsive"
        />
      </div>
      <CategoryItemDescription>
        <h2>{categoryItem.name}</h2>
        <p>{categoryItem.description}</p>
        <Button
          id={categoryItem.id}
          name={`Explore ${categoryItem.name}`}
          onClick={onExploreButtonClick}
        >
          Explore {categoryItem.name}
        </Button>
      </CategoryItemDescription>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
