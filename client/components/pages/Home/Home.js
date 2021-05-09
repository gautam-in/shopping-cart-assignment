import React, { useEffect, useState } from "react";

/* import * as service from "../Home/Home.service"; */
import * as service from "../services";

import "./Home.scss";
/* import "../../organisms/Carousel/Carousel.scss"; */
import Carousel from "../../organisms/Carousel/Carousel";

const intialState = {
  data: [],
  loading: false,
  error: false,
};

function Home() {
  const [offers, setOffers] = useState([]);

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

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="home_container">
      <Carousel offers={offers} />
    </div>
  );
}

export default Home;
