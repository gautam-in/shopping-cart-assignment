import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const Offers = (props) => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get("http://localhost:3030/banners");
        setBannerData(response.data);
      } catch (e) {
        console.error("Failed to fetch");
        console.error(e);
      }
    }
    fetchApi();
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

const OffersContainer = styled.div`
  padding: 32px;
  box-shadow: 0 20px 30px -30px rgba(0, 0, 0, 0.7);
`;

export default Offers;
