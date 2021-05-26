import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../common/button";
import Image from "../common/image";

import { FetchData } from "../../utils";
import { getCategoryApi } from "../../services";

import "./index.scss";

const Banner = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    FetchData(getCategoryApi)
      .then((res) => {
        const categoryList = res
          .sort((a, b) => a.order - b.order)
          .filter((value) => {
            return value.order !== -1;
          });
        setCategories(categoryList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategory = (e) => {
    const categoryId = e.target.id;
    history.push(`/products?category=${categoryId}`);
  };

  return (
    <Fragment>
      {categories &&
        categories.length > 0 &&
        categories.map((category, i) => (
          <div
            key={category.id}
            className="category_container"
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="category-img">
              <Image
                src_2x={category.imageUrl}
                src={category.imageUrl}
                alt={category.name}
                imgClassName={"category"}
              />
            </div>
            <div className="category_description">
              <h4 className="title-xl">{category.name}</h4>
              <p className="title">{category.description}</p>
              <Button
                variant="primary"
                onClick={handleCategory}
                id={category.id}
              >{`Explore ${category.name}`}</Button>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default Banner;
