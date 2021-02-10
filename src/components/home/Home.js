import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.scss";
import {
  getBanners,
  getCategories,
  setActiveTab,
} from "../../redux/actions/actions";

import ImageSlider from "../common/imageSlider/ImageSlider";
import Card from "../common/card/Card";

const Home = (props) => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banners);
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getBanners());
    dispatch(getCategories());
  }, []);

  const sortByKey = (array, key) => {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const handleClick = () => {
    dispatch(setActiveTab("Products"));
    window.location.href = "#/productsPage";
  };

  return Array.isArray(categories) && Array.isArray(banners) ? (
    categories.length > 0 && banners.length > 0 && (
      <section className="homeContainer">
        <ImageSlider images={banners} />
        {sortByKey(categories, "order").map(
          (item) =>
            item.order > 0 &&
            item.enabled && (
              <Card
                key={item.id}
                src={item.imageUrl}
                buttonText={item.key}
                title={item.name}
                description={item.description}
                order={item.order}
                handleClick={handleClick}
              />
            )
        )}
      </section>
    )
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
