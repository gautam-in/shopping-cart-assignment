import React, { useEffect, useState } from "react";

/* import * as service from "../Home/Home.service"; */
import * as service from "../services";

import "./Home.scss";
/* import "../../organisms/Carousel/Carousel.scss"; */
import Carousel from "../../organisms/Carousel/Carousel";
import Button from "../../atoms/Button/Button";
import { useHistory } from "react-router";

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
        console.log("fssjfksf", temp);
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
        {categories.map((ele, i) => (
          <div key={ele.id} className="flexed_ai_center">
            {i % 2 === 0 && (
              <img src={ele.imageUrl} alt={ele.name} width="100" />
            )}
            <div className="explore_caption">
              <h4>{ele.name}</h4>
              <div>{ele.description}</div>
              <Button
                onClick={() => {
                  history.push({
                    pathname: "/products",
                    search: "?category=" + ele.id,
                  });
                }}
              >
                Explore {ele.name}
              </Button>
            </div>
            {i % 2 !== 0 && (
              <img src={ele.imageUrl} alt={ele.name} width="100" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
