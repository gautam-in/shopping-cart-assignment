import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../components/images/carosul/offer1.jpg";
import img2 from "../../components/images/carosul/offer2.jpg";
import img3 from "../../components/images/carosul/offer3.jpg";
import "./carosul.css";
const Carosul = () => {
  return (
    <div className="carosulContainer">
      <Carousel className="carosulContainer">
        <img src={img1} className="carosulImg" />

        <img src={img1} />

        <img src={img1} />
      </Carousel>
    </div>
  );
};
export default Carosul;
