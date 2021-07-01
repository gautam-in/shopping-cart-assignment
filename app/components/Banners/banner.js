import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './banner.constant';
import { ImageConatiner } from './banner.styles';
import withErrorHandler from '../../ErrorBoundary/withErrorHandler';

const renderBanner = (banners) => {
  if(banners){
  return banners.map((banner) => {

    return (
      <img
        key={banner.id}
        src={banner.bannerImageUrl}
        alt={banner.bannerImageAlt}
        loading="lazy"
      />
    );
  });
}
else{
  return<div> loading...</div>
}
};

const Banner = ({ banners }) => {
  return (
    <ImageConatiner>
      <Slider {...settings}>{renderBanner(banners)}</Slider>
    </ImageConatiner>
  );
};

Banner.propTypes = {
  banners: PropTypes.array,
};

export default withErrorHandler(Banner);
