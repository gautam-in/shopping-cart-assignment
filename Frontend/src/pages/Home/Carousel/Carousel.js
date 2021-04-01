import {useEffect, useState} from 'react';
import Slider from '../../../components/Slider';
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
      {!loading && !error && <Slider carouselImages={carouselImages} />}
      {!loading && error && <h1>Something went wrong!</h1>}
    </>
  );
};

export default Carousel;
