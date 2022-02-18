import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../http";
import Container from "../container/Container";
import CustomButton from "../custom-button/custom-buttom.component";
import {
  CategoryCardContainer,
  CategoryImage,
  CategoryImageContainer,
  CategoryInfo,
  CategoryWrapper,
} from "./category.styles";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await getAllCategories();
      setCategories(data.sort((first, second) => first.order - second.order));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryWrapper>
      <Container>
        {categories.map(
          ({ imageUrl, key, id, description, name }, index) =>
            imageUrl && (
              <CategoryCardContainer key={key} position={index}>
                <CategoryImageContainer>
                  <CategoryImage src={imageUrl} />
                </CategoryImageContainer>
                <CategoryInfo>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <CustomButton>Explore {key}</CustomButton>
                </CategoryInfo>
              </CategoryCardContainer>
            )
        )}
      </Container>
    </CategoryWrapper>
  );
};

export default CategoryCard;
