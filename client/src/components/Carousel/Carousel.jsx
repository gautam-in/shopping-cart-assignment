import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

import ImageGallery from 'react-image-gallery';

const CarouselSlider = ({ banners }) => {
  const images = banners.map((banner) => ({ original: banner.bannerImageUrl }));
  return (
    <div className={styles['carousel-container']}>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default CarouselSlider;

CarouselSlider.propTypes = {
  banners: PropTypes.array
};
