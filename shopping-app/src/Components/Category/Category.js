import React, { useContext } from "react";
import {
  CategoryAsideOne,
  CategoryContainer,
  CategoryImage,
} from "../Styles/Category.Styles";
import { HeadingPrimary, SubHeading } from "../Styles/Heading.Styles";
import { Button } from "../Styles/Button.Styles";
import { NavLink } from "../Styles/Header.styles";
import { CartContext } from "../Header/CartContext";

const Category = () => {
  const {
    state: { categories },
  } = useContext(CartContext);

  const sortedArray = categories.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) return 1;
    else return 0;
  });

  return (
    <>
      {sortedArray.length > 0 &&
        sortedArray.map((item) => {
          if (!item.enabled) return null;
          return (
            <CategoryContainer key={item.id}>
              <CategoryAsideOne>
                <HeadingPrimary>{item.name}</HeadingPrimary>
                <SubHeading>{item.description}</SubHeading>
                <Button>
                  <NavLink
                    to={{ pathname: "/products", state: { id: item.id } }}
                  >{`Explore ${item.key}`}</NavLink>
                </Button>
              </CategoryAsideOne>
              <div>
                <CategoryImage src={`../..${item.imageUrl}`} />
              </div>
            </CategoryContainer>
          );
        })}
    </>
  );
};

export default Category;
