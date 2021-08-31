import styled from "styled-components";
import CategoryItem from "../CategoryItem";

const CategoryListWrapper = styled.ul`
  padding: 0;
`;

const CategoryList = ({ categories }) => {
  if (!categories.length) return null;
  return (
    <CategoryListWrapper>
      {categories.map((categoryItem) => (
        <CategoryItem key={categoryItem.id} categoryItem={categoryItem} />
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
