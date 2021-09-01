import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../../atoms/Button";
import {
  CategoryItemDescription,
  CategoryItemWrapper,
} from "./CategoryItem.styles";

const CategoryItem = ({ categoryItem }) => {
  if (!categoryItem.imageUrl) return null;

  const router = useRouter();

  const onExploreButtonClick = (e) => {
    const categoryId = e.target.id;
    router.push({
      pathname: "/products",
      query: { selectedCategory: categoryId },
    });
  };

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
