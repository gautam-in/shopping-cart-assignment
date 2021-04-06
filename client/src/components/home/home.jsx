<<<<<<< HEAD
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./utility/card";
import Banner from "./utility/banner";
import "./index.scss";
import serviveWrapper from '../../serviceWrapper';

function Home({ categories }) {
  const [banners, setBanners] = React.useState([]);

  React.useEffect(() => {
    var url ="http://localhost:5000/banners"
    serviveWrapper(url,setBanners);
  }, []);
  

  return (
    <div className="productContainer" data-test ="home-component">
      <div className="home" data-test ="home-banner-component">
        {banners.length > 0 && (
          <Carousel autoPlay infiniteLoop interval={2000} showStatus="false">
            {banners.map((o, i) => (
              <Banner key={i} o={o} />
            ))}
          </Carousel>
        )}
        <div data-test ="home-category-component">
          {categories.map((c, i) => {
            return <Card c={c} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
=======
import React from "react";
import Card from "./lib/card";
import Banner from "./lib/banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss";

function Home({ categories }) {
  const [banners, setBanners] = React.useState([]);

  React.useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:5000/banners",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setBanners(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="productContainer">
      <div className="home">
        {banners.length > 0 && (
          <Carousel autoPlay infiniteLoop interval={2000}>
            {banners.map((o, i) => (
              <Banner key={i} o={o} />
            ))}
          </Carousel>
        )}
        <div>
          {categories.map((c, i) => {
            return <Card c={c} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
>>>>>>> 5c61fa810bfdac7324f5508c516b2d7a14df4d81
