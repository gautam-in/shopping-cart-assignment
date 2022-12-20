import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getSelectedCategory,
  updateCategory,
} from "../../../store/entities/items";
import { isMobile } from "../../../utils";
import Footer from "../../common/footer/footer";
import "./categoriesSection.scss";

function CategoriesSection() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  const categories = useSelector(getCategories);
  let categoryName = categories.filter((item) => item.id === selectedCategory);
  // console.log(categoryName[0].name);

  return (
    <>
      <div className="categoriesContainer">
        {isMobile ? (
          <div className="sidemenuSelect">
            <select
              name="categories"
              onChange={(e) => dispatch(updateCategory(e.target.value))}
              defaultValue={"Categories"}
              // value={(e) => categoryName[0]?.name}
            >
              <option value="Categories" disabled>
                Categories
              </option>
              {categories.map((item) => (
                <option key={item.id} value={item.id} id={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          categories.map((cat, index) => (
            <div
              className={
                cat.id === selectedCategory
                  ? "selectedCategory eachCategory"
                  : "eachCategory"
              }
              key={cat?.id}
              onClick={() => dispatch(updateCategory(cat.id))}
            >
              {cat?.name}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CategoriesSection;
