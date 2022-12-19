import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, updateCategory } from "../../../store/entities/items";
import { isMobile } from "../../../utils";
import Footer from "../../common/footer/footer";
import "./categoriesSection.scss";

function CategoriesSection() {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  return (
    <>
      <div className="categoriesContainer">
        {isMobile ? (
          <div className="sidemenuSelect">
            <select
              name="categories"
              onChange={(e) => dispatch(updateCategory(e.target.value))}
              defaultValue={"Categories"}
              // value={id}
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
              className="eachCategory "
              key={cat?.id}
              onClick={() => dispatch(updateCategory(cat.id))}
            >
              {cat?.name}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default CategoriesSection;
