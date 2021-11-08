import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import "../../App.css";

const MainContainer = styled.div`
  width: 70%;
  height: 50%;
  margin: 1% 15%;
  box-shadow: 0px 7px 10px -7px grey;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1% 0 0 0;
  }
`;
const Banner = (props) => {
  const [bannerResp, setBannerResp] = useState(null);

  useEffect(() => {
    axios("http://localhost:5000/banners")
      .then((resp) => {
        setBannerResp(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <MainContainer>
      {bannerResp && (
        <Carousel>
          {bannerResp.map((banner) => {
            return (
              <Carousel.Item key={banner.id} interval={1500}>
                <div>
                  <img
                    className="d-block w-100"
                    src={banner.bannerImageUrl}
                    alt={banner.bannerImageAlt}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </MainContainer>
  );
};
export default Banner;
