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
