import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { getBannersAction } from "../../store/actions/bannersAction";


export default function Banner() {
  const dispatch = useDispatch();

  const bannersData = useSelector((state) => {
    return state.banners;
  });

  useEffect(() => {
      dispatch(getBannersAction());
  }, [dispatch]);


  return (
    <div className="banner">
      <div className="carousel-container">
        <Carousel infiniteLoop autoPlay useKeyboardArrows centerMode showThumbs={false}>
          {bannersData.loading ? <div>Loading...</div> :bannersData.banners.map((banner) => (
            <div key={banner.id}>
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}