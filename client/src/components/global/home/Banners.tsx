/* eslint-disable import/no-extraneous-dependencies */
import Carousel from 'nuka-carousel/lib/carousel';
import useQuery from '../../../hooks/useQuery';
import { Banner } from '../../../utils/types/banner';

function Banners() {
  const { data: banners } = useQuery('/banners');
  return (
    <section className="banner">
      <Carousel
        autoplay
        wrapAround
        cellSpacing={10}
        defaultControlsConfig={{
          pagingDotsStyle: { margin: '0 10px 0 10px' },
        }}
      >
        {banners?.map((banner: Banner) => (
          <div className="carousel-item" key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Banners;
