import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseURL = "http://localhost:5000/banners";
const Banner = () => {
  const [bannerList, setBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL).then((response) => {
          setBanner(response.data);
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner border-shadow">
      <Slider {...settings}>
        {bannerList.map((item) => {
          return (
            <div>
              <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
