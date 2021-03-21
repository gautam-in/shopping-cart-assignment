import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GET_BANNERS_API,
  GET_CATEGORIES_API,
  PRIMARY_SERVER,
} from "../../Constants/ServerUrl";
import Categories from "../Categories/Categories";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBanners();
    getCategories();
  }, []);

  const getBanners = async () => {
    debugger;
    try {
      const result = await axios.get(PRIMARY_SERVER + GET_BANNERS_API);
      debugger;
      console.log(result.data);
      setBanners(result.data);
    } catch (e) {}
  };

  const getCategories = async () => {
    try {
      const result = await axios.get(PRIMARY_SERVER + GET_CATEGORIES_API);
      setCategories(result.data);
    } catch (e) {}
  };

  return (
    <div>
      Welcome to Homepage!
      {categories.length ? <Categories categoryList={categories} /> : ""}
    </div>
  );
};

export default Home;
