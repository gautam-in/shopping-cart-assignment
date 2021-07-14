import styled from "styled-components";
import Category from "../molecules/CategoryContainer";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default function Categories({ categories }) {
  if (!categories.length) return null;
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}
