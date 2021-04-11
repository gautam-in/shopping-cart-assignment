import {useEffect, useState} from 'react';
import AlertInfo from '../../../components/Alert';
import {SkeletonImage} from '../../../components/SkeltonLoaders';
import Slider from '../../../components/Slider';
import Api from '../../../services/Api';
import './Carousel.scss';

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
      <div className="skeletonImage-wrap">{loading && <SkeletonImage />}</div>
      {!loading && !error && <Slider carouselImages={carouselImages} />}
      {!loading && error && <AlertInfo />}
    </>
  );
};

export default Carousel;
