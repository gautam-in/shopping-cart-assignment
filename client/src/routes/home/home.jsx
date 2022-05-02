import React, { useEffect, useState } from "react";
import axios from "axios";
import Banners from "../../components/banners/banners";
import CategoriesList from "../../components/categories-list/categories-list";
import { BASE_URL } from "../../utilities/constants";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getBanners = async () => {
      try {
        const response = await axios.get(BASE_URL + "banners");
        if (response.status === 200) {
          setBanners(response.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getBanners();

    const getCategories = async () => {
      try {
        const response = await axios.get(BASE_URL + "categories");
        if (response.status === 200) {
          const filteredCategories = response.data
            .filter((category) => category.enabled)
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((category, index) => ({
              ...category,
              alignment: index % 2 === 0 ? "left" : "right",
            }));
          setCategories(filteredCategories);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getCategories();
  }, []);
  return (
    <>
      <Banners banners={banners} />
      <CategoriesList categories={categories} />
    </>
  );
};

export default Home;
