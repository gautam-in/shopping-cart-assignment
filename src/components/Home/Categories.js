import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import { withRouter } from "react-router-dom";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  //Use effect to fetch categories data
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      const outputArray = [];
      const indexArray = [];

      for (const key in response.data) {
        if (response.data[key].enabled) {
          indexArray.push(response.data[key].order);
        }
      }
      for (const key in indexArray) {
        for (const newKey in response.data) {
          if (response.data[newKey].order === indexArray[key])
            outputArray[indexArray[key] - 1] = response.data[newKey];
        }
      }

      setCategories(outputArray);
    });
  }, []);
  const setPath = (categoryId) => {
    props.history.push("/products/" + categoryId);
  };

  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <Category
            key={category.id}
            name={category.name}
            btnName={category.key}
            description={category.description}
            imageUrl={category.imageUrl}
            order={category.order}
            setPath={() => setPath(category.id)}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Categories);
