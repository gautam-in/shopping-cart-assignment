import styled from "styled-components";
import Category from "./CategoryContainer";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CategoryDispaly = ({ categories }) => {
  if (!categories.length) return null;
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        category?.order> 0 && <Category key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDispaly;
