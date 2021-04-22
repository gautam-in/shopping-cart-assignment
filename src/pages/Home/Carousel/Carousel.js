import React, { useEffect, useState } from 'react';

import ImageSlider from '../../../components/ImageSlider';
import Api from '../../../services/Api';

const Carousel = () => {
  const [loading, setLoading] = useState(false);
  const [carouselImages, setCarouselcarouselImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.banners()
      .then((data) => {
        setLoading(false);
        setCarouselcarouselImages(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      {loading && <h5>Loading...</h5>}
      {!loading && !error && <ImageSlider carouselImages={carouselImages} />}
      {!loading && error && <h1>Something went wrong!</h1>}
    </>
  );
};

export default Carousel;
