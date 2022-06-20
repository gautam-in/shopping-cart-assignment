import React, { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel';
import Wrapper from '../Utilities/Wrapper';
import { StyledBanner } from './Banner.styled';
import { getBannerList } from '../../services/ApiService';

const Banner = () => {

  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    async function getBanners() {
      const bannerList = await getBannerList();
      setBannerImages(bannerList);
    }

    getBanners();
  }, []);


  return (
    <StyledBanner className='banner'>
        <Wrapper>
        <Carousel>
          {
            bannerImages.map((bannerImage) => (
              <img key={bannerImage.id} id={bannerImage.id} order={bannerImage.order} src={bannerImage.bannerImageUrl} alt={bannerImage.bannerImageAlt} />
            ))
          }
        </Carousel>
        </Wrapper>
    </StyledBanner>
  )
}

export default Banner;