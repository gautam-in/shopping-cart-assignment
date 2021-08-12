import axios from "axios";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styled from "styled-components";
import { useQuery } from "react-query";
import LoadError from "../LoadError";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const BannerWrapper = styled.div`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 1rem 0;
  position: relative;
`;

const PaginationButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  &.nextEl {
    right: 0;
  }
`;
const baseURL = "http://localhost:3000/api/banners";

const getBanners = async () => {
  const res = await axios.get(baseURL);
  return res.data
}

export default function HomeCarousel() {
  const {data, isLoading, isError} = useQuery('getBanners', getBanners)
  if(isLoading) {
    return (
      <p>Loading...</p>
    );
  }
  if(isError) {
    return (
      <LoadError />
    )
  }
  if(data) {
    return (
      <BannerWrapper>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          navigation={{ prevEl: ".prevEl", nextEl: ".nextEl" }}
          loop
        >
          {data.map((banner) => {
            return (
              <SwiperSlide key={banner.id}>
                <Image
                  src={banner.bannerImageUrl}
                  alt={banner.bannerImageAlt}
                  width="1200"
                  height="300"
                />
              </SwiperSlide>
            );
          })}
          <PaginationButton className="prevEl">PREV</PaginationButton>
          <PaginationButton className="nextEl">NEXT</PaginationButton>
        </Swiper>
      </BannerWrapper>
    );
  }
  
}
