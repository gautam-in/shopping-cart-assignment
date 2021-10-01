/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Slider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banners() {
  const [banners, setBanners] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,

  };

  // Fetching data once component is rendered.
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/banners');
      const bannersData = await res.json();
      setBanners(bannersData);
    }
    fetchData();
  }, []);

  function populateBanners(banner) {
    return (
      <div key={banner.id}>
        <div className={styles.bannerImg}>
          <Image src={banner.bannerImageUrl} layout="fill" objectFit="contain" alt={banner.bannerImageAlt} />
        </div>

      </div>
    );
  }

  return (
    <aside className={styles.SliderContainer}>
      <Slider className={styles.SliderMain} {...settings}>

        { banners.length > 0 && banners.map(populateBanners)}
      </Slider>
    </aside>
  );
}
