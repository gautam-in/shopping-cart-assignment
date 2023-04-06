import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const CarouselComp = ({ banners }) => {
  return (
    <Carousel className='carousel'>
      {banners.map(({ bannerImageUrl, bannerImageAlt, id }) => (
        <Carousel.Item key={id}>
          <img
            className='d-block w-100'
            src={bannerImageUrl}
            alt={bannerImageAlt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComp;
