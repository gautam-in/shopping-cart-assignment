import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { OffersContainer } from "./offers.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../../redux/fetchData/fetch.actions.js";

const Offers = (props) => {
  const { bannerData, error } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanners());
  }, []);
  return (
    <OffersContainer>
      <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
        {bannerData.map((banner, index) => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </OffersContainer>
  );
};

export default Offers;