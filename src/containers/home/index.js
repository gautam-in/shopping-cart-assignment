import React, { useEffect, useState } from "react";

import Carousel from "../../components/carousel";
import Categories from "../../components/categories";

import "./index.scss";

import { FetchData } from "../../utils";
import { getBannerApi } from "../../services";

const Home = () => {
  const [offers, setOffers] = useState([]);

  const getOffers = () => {
    FetchData(getBannerApi)
      .then((res) => {
        setOffers(res);
      })
      .catch((err) => {
        console.log("ERROR detected fetching products", err);
      });
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="container-fluid wrapper">
      <Carousel offers={offers} />
      <Categories />
    </div>
  );
};

export default Home;
