import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SliderComponent from "../../components/SliderComponent";
import CategoryBanner from "../../components/CategoryBanner";
import { setFilter } from "../../store/action";
import { get } from "../../utils";

import "./HomePage.scss";

const Home = () => {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    get("banners").then(({ data }) => {
      setBanner(data);
    });
    get("categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const gotoCategory = (categoryId) => {
    history.push("/products");
    dispatch(setFilter(categoryId));
  };

  return (
    <div className="banners">
      <SliderComponent sliderData={banner} />
      {categories
        .filter((item) => item.enabled)
        .map((item) => (
          <CategoryBanner
            category={item}
            key={item.key}
            gotoCategory={gotoCategory}
          />
        ))}
    </div>
  );
};

export default Home;