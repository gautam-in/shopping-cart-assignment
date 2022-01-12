import React, { useContext } from "react";
import {
  CategoryAsideOne,
  CategoryContainer,
  CategoryImage,
} from "./CategoryElements";
import { HeadingPrimary, SubHeading } from "../Typography/Typography";
import { Button } from "../Button/ButtonElements";
import { NavLink } from "../Header/NavBarElements";
import { CartContext } from "../Context/CartContext";

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
