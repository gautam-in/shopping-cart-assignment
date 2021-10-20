import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import SliderComponent from "../../components/SliderComponent";
import CategoryBanner from "../../components/CategoryBanner";
import { setFilter } from "../../store/action";
import "./style.scss";

export default function Home() {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/banners");
        setBanner(data);
      } catch (e) {
        console.log("Error while fetching banner data", e);
      }
      try {
        const { data } = await axios.get("http://localhost:5000/categories");
        setCategories(data);
      } catch (e) {
        console.log("Error while fething categories", e);
      }
    })();
  }, []);

  const openCategory = (categoryId) => {
    history.push("/products");
    dispatch(setFilter(categoryId));
  };

  return (
    <div className="body-section">
      <SliderComponent banner={banner} />
      {categories.map(
        (item) =>
          item.enabled && (
            <CategoryBanner
              category={item}
              key={item.key}
              openCategory={openCategory}
            />
          )
      )}
    </div>
  );
}
