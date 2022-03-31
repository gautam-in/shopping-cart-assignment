import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {bannerData.map((banner, index) => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </OffersContainer>
  );
};

const OffersContainer = styled.div`
  box-shadow: 0 20px 30px -30px rgba(0, 0, 0, 0.7);
  padding: 32px;
`;

export default Offers;
