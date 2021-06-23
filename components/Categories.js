import styled from "styled-components";
import Category from "./Category";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
`;

export default function Categories({categories}){
    const renderCategories = (categories) => {
        if (categories) {
          return categories.map((category) => {
            return <Category key={category.id} category={category} />;
          });
        } else {
          return <div>loading...</div>;
        }
      };

      return(
          <CategoriesContainer>
            {renderCategories(categories)}
          </CategoriesContainer>
      )
}