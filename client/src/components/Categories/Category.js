import React from "react";
import { CategorySection } from "./Category.style";
import SeperatorImgUrl from "../../assets/images/seperator.png";
import { Seperator } from "./Category.style";
import { useHistory } from "react-router-dom";
import { ButtonPink } from "../Products/Product.style";
import { BASE_URL } from "../../Action";
import NoImage from "../../assets/images/no-image.jpeg";
function Category({ category, index }) {
  const history = useHistory();
  const convertCaegoryHyphened = (name) => {
    return name.toLowerCase().split(" ").join("-");
  };
  const redirectToCategory = () => {
    history.push(`/products/${category.id}`)
  }
  // console.log("category.imageUrl",category.imageUrl);
  return (
    <CategorySection>
      {(index + 1) % 2 !== 0 ? (
        <>
          <div className="category-info even">
            <div className="image">
              <img
                src={
                  category.imageUrl
                    ? category.imageUrl
                    : NoImage
                }
                alt="Category"
              />
            </div>
            <div className="category-desc">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <ButtonPink className="category-button" onClick={redirectToCategory}>
                {"Explore " + convertCaegoryHyphened(category.name)}
              </ButtonPink>
            </div>
          </div>
          <Seperator src={SeperatorImgUrl} />
        </>
      ) : (
        <>
          <div className="category-info odd">
            <div className="category-desc">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <ButtonPink className="category-button" onClick={redirectToCategory}>
                {"Explore " + convertCaegoryHyphened(category.name)}
              </ButtonPink>
            </div>
            <div className="image">
              <img
                src={
                  category.imageUrl
                    ? BASE_URL + category.imageUrl
                    : NoImage
                }
                alt="category"
              />
            </div>
          </div>
          <Seperator src={SeperatorImgUrl} />
        </>
      )}
    </CategorySection>
  );
}

export default Category;
