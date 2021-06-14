import React, { useState, useEffect } from "react";
import Header from "Components/Header/Header";
import Slider from "Components/Slider/Slider";
import Categories from "Components/Categories/Categories";
import { getCategoryList } from "Services/services";

export default () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await getCategoryList();
    console.log("getCategories::result::", result);
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Header />
      <Slider />
      {categories?.map((catagory, idx) => (
        <Categories data={catagory} flip={idx % 2 === 0 ? false : true} />
      ))}
    </>
  );
};
