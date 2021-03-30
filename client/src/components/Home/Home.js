import React, { useEffect, useState, useRef, useCallback } from "react";
import Banner from "../Banner/Banner";
import BannerSlider from "../BannerSlider/BannerSlider";

function Home() {
  return (
    <>
      <BannerSlider />
      <Banner />
    </>
  );
}

export default Home;
