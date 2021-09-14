import { useEffect, useState } from "react";
import classes from "./Home.module.scss";

import { Link } from "react-router-dom";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
export default function Home() {
  const [bannerData, setBannerData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  //api call for banners data
  useEffect(() => {
    document.title = "S B | Home";
    Axios.get("http://localhost:5005/banners")
      .then((res) => {
        setBannerData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //api call for categories:- Home
  useEffect(() => {
    Axios.get("http://localhost:5005/categories")
      .then((res) => {
        setCategoriesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let orderedCategories = categoriesData.sort((a, b) => a?.order - b?.order);

  return (
    <div className={classes.Container}>
      <div className={classes.CarouselContainer}>
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          useKeyboardArrows="true"
          interval="2000"
        >
          {bannerData.map((item) => (
            <OfferBanner
              key={item?.id}
              bannerImageUrl={item?.bannerImageUrl}
              bannerImageAlt={item?.bannerImageAlt}
            />
          ))}
        </Carousel>
      </div>
      {categoriesData.map((item) =>
        item?.order !== -1 ? (
          <CategoryCard
            key={item?.id}
            id={item?.id}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item?.description}
            alt={item?.key}
            order={item.order}
          />
        ) : null
      )}
    </div>
  );
}
