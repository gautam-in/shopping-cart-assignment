import CategoryItem from "../CategoryItem";
import { CategoryListWrapper } from "./CategoryList.styles";

const CategoryList = ({ categoriesList }) => {
  if (!categoriesList.length) return null;
  return (
    <CategoryListWrapper>
      {categoriesList.map((categoryItem) => (
        <CategoryItem key={categoryItem.id} categoryItem={categoryItem} />
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
