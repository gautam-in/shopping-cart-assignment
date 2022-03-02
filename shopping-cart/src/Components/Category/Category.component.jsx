import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CatgoryContainer,
  Image,
  Content,
  Title,
  Description,
  Button,
} from "./Category.styles";

const Category = ({ category }) => {
  const { name, imageUrl, description, order, enabled, buttonText, id } =
    category;
  const navigate = useNavigate();
  return (
    <CatgoryContainer order={order}>
      <Image src={imageUrl} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button
          onClick={() => {
            navigate(`/shop/${buttonText}`, { state: id });
          }}
        >
          Explore {buttonText}
        </Button>
      </Content>
    </CatgoryContainer>
  );
};

export default Category;
