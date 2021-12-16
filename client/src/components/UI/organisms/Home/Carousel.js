import React, { useEffect, useState } from "react";
import Slider from "../../molecules/Carousel/Slider";
import Api from "../../atoms/util/Api";

const Carousel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [carouselImages, setcarouselImages] = useState([]);
  useEffect(() => {
    setLoading(true);
    Api.banners()
      .then((data) => {
        setLoading(false);
        setcarouselImages(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      {!loading && !error && <Slider carouselImages={carouselImages} />}
    </div>
  );
};
export default Carousel;
