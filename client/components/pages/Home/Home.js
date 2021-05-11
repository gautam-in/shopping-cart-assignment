import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Carousel from "../../organisms/Carousel/Carousel";
import Explore from "../../organisms/Explore/Explore";

import * as service from "../services";

import "./Home.scss";

const intialState = {
  data: [],
  loading: false,
  error: false,
};

function Home() {
  const history = useHistory();
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);

  const getOffers = () => {
    service
      .getOffersForCarousel()
      .then((data) => {
        setOffers(data);
      })
      .catch((err) => {
        console.log("ERROR detected fetching products", err);
      });
  };
  const getCategoriesOptions = () => {
    service
      .getCategories()
      .then((data) => {
        let temp = data.filter((ele) => ele.enabled);
        temp.sort((a, b) => a.order - b.order);
        setCategories(temp);
      })
      .catch((err) => {
        console.log("ERROR detected fetching products", err);
      });
  };

  useEffect(() => {
    getOffers();
    getCategoriesOptions();
  }, []);

  return (
    <div className="home_container">
      <Carousel offers={offers} />
      {/* To-do Gradient bottom */}
      {/* <div className="gradient_shadow"></div> */}
      <div className="explore">
        {categories.map((category, i) => (
          <Explore key={category.id} index={i} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
