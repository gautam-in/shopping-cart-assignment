import React from "react";
import Card from "./card";
import Banner from "./banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss";

const Home =({ categories }) => {
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
    <main>
      <div className="home">
        {banners.length > 0 && (
          <Carousel autoPlay infiniteLoop interval={4000}>
            {banners.map((banner, i) => (
              <Banner banner={banner} key={i}/>
            ))}
          </Carousel>
        )}
        <div>
          {categories.map((card, i) => {
            return <Card card={card} i={i} key={i} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
