import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Slider.scss";
import SliderContent from "./SliderContent";

const Slider = () => {
  const inputEl = useRef(null);
  // let images = [];
  console.log(inputEl.current);
  const [slider, setSlider] = useState({
    imagesData: [],
    activeIndex: 0,
  });
  useEffect(() => {
    axios.get("http://localhost:5000/banners").then((response) => {
      const imagesArray = response.data;
      setSlider({
        // ...slider,
        imagesData: imagesArray,
      });
      // images[...response.data]
    });
  }, []);
  return (
    <div className="slider">
      <SliderContent images={slider.imagesData} />
    </div>
  );
};

export default Slider;
