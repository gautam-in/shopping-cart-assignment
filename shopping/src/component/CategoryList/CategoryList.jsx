import React, { useState, useEffect } from "react";
//import categoryData from "../../server/categories/index.get.json";
import CategoryItem from "./CategoryItem/CategoryItem";
import axios from "axios";
import "./categoryList.css";

const baseURL = "http://localhost:5000/categories";
const CategoryList = () => {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL).then((response) => {
          setcategoryList(response.data);
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="category-container">
      {categoryList.length > 0
        ? categoryList.map((item) => {
            return (
              <CategoryItem key={item.id} categoryItem={item}></CategoryItem>
            );
          })
        : null}
    </div>
  );
};

export default CategoryList;
