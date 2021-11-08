import React, { useState, useEffect } from "react";
import axios from "axios";
import { CategoryBanner } from "./CategoryBanner";
import style from "./home.module.css";

const Categories = (props) => {
  const [categoryResp, setCategoryResp] = useState(null);

  useEffect(() => {
    axios("http://localhost:5000/categories")
      .then((resp) => {
        setCategoryResp(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={style.categorySection}>
      {categoryResp &&
        categoryResp.map((item, index) => {
          return (
            item.enabled && (
              <CategoryBanner key={item.id} index={index} item={item} />
            )
          );
        })}
    </div>
  );
};

export default Categories;
