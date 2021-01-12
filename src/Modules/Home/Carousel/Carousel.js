import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import axios from "axios";

import baseHelper from "../../../Library/helper";

import classes from "./Carousel.module.scss";

const HomeCarousel = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    if (banner.length) {
      return;
    }

    axios.get("http://localhost:4000/api/banner")
    .then(response => {
        setBanner(response.data || []);
    });
  
  }, [banner]);

  if (!banner.length) {
    return "No Images";
  }

  const carouselItems = banner.map(item => {
    const imagePath = baseHelper.getImagePath(item.bannerImageUrl);

    return (
      <Paper key={item.id}>
        <img src={imagePath} alt={item.bannerImageAlt} className={classes.Image} />
      </Paper>
    );
  });

  return (
    <Carousel className={classes.Carousel}>
      {carouselItems}
    </Carousel>
  )
}

export default HomeCarousel;
