import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CategoryFilter from "./CategoryFilter";
import { CategoryContext } from "../../../contexts/CategoryContext";
import style from "./products.module.css";

const Categories = (props) => {
  const [categoryResp, setCategoryResp] = useState(null);
  const categoryContextData = useContext(CategoryContext);

  useEffect(() => {
    axios("http://localhost:5000/categories")
      .then((resp) => {
        setCategoryResp(resp.data);
        // console.log("Category List", resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onChangehandler = (e) => {
    let val = e.target.value;
    categoryContextData.setCategory(val);
  };
  return (
    <>
      <div className={style.categoryFilterList}>
        {categoryResp &&
          categoryResp.map((category) => (
            <CategoryFilter
              key={category.id}
              category={category}
              categoryContextData={categoryContextData}
            />
          ))}
      </div>

      <div className={style.categoryFilterDropdownSection}>
        {categoryResp && (
          <select className={style.categoryDropdown} onChange={onChangehandler}>
            <option key={"default"} value={""}>
              Select Category
            </option>
            {categoryResp.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </>
  );
};

export default Categories;
