import React, { useEffect, useState } from "react";
import CategoryBanner from "../../molecules/Category/CategoryBanner";
import Api from "../../atoms/util/Api";
import "../../molecules/Category/Categories.scss";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Api.getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="categories-wrap">
      <>
        <ul className="clearfix">
          {categories.map(
            (items) =>
              items.enabled && (
                <CategoryBanner category={items} key={items.key} />
              )
          )}
        </ul>
      </>
    </div>
  );
};
export default Category;
