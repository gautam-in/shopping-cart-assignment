import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banners = ({ banners }) => {
  const activeBanners = [].concat(banners)
    .filter(banner => banner.isActive)
    .sort((a, b) => a.order > b.order ? 1 : -1);

  return (
    <Carousel showThumbs={false}>
      {activeBanners.map(banner => (
        <img
          key={banner.id}
          src={banner.bannerImageUrl}
          alt={banner.bannerImageAlt}
        />
      ))}
    </Carousel>
  );
};

export default Banners;
