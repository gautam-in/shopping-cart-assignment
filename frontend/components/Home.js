import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Category from "./Category";
import classes from "./Home.module.css";
import { useRouter } from "next/router";

const HomeContainerStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 200vh;
  width: 90vw;
  position: relative;
  top: 5%;
  left: 3%;
  justify-items: center;
  align-items: center;
`;

const BannerStyles = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const ButtonStyles = styled.button`
  background-color: #e33244;
  border-radius: 4%;
  width: 90px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  font-weight: 500;
  align-items: center;
  color: white;
  padding: 5px;
  font-size: x-small;
  font-weight: 700;
`;

export default function Home({ categories, banners }) {
  const router = useRouter();
  return (
    <HomeContainerStyles>
      <BannerStyles>
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
        >
          {banners.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.bannerImageUrl}
                  alt={item.bannerImageAlt}
                  key={item.id}
                />
              </div>
            );
          })}
        </Carousel>
      </BannerStyles>
      {categories.map((item) => {
        return (
          <BannerStyles key={item.id}>
            <div className={classes.category}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ButtonStyles
                onClick={() => {
                  router.push(`products/${item.id}`);
                }}
              >
                Explore {item.name}
              </ButtonStyles>
            </div>

            <img src={item.imageUrl} style={{ width: "30%", height: "50%" }} />
          </BannerStyles>
        );
      })}
    </HomeContainerStyles>
  );
}
