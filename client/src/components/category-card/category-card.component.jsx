import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
                  <CategoryImage
                    src={imageUrl}
                    alt={name}
                    width="200"
                    height="200"
                  />
                </CategoryImageContainer>
                <CategoryInfo>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <CustomButton
                    onClick={() => navigate(`/products?category=${id}`)}
                  >
                    Explore {key}
                  </CustomButton>
                </CategoryInfo>
              </CategoryCardContainer>
            )
        )}
      </Container>
    </CategoryWrapper>
  );
};

export default CategoryCard;
