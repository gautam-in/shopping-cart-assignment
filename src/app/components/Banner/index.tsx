/**
 *
 * Banner
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import Skeleton from '@mui/material/Skeleton';
import Slider from 'react-slick';
import map from 'lodash/map';
import { BannerItem } from 'types/banners';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  loading: boolean;
  banners: Array<BannerItem>;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  arrows: true,
  autoplay: true,
  lazyLoad: 'ondemand',
};

export const Banner = memo((props: Props) => {
  const { loading, banners } = props;

  if (loading) {
    return <Skeleton variant="rectangular" height={318} />;
  }

  return (
    <Div>
      <Slider {...settings}>
        {map(banners, ({ bannerImageUrl, bannerImageAlt, id }) => (
          <img src={bannerImageUrl} alt={bannerImageAlt} key={id} />
        ))}
      </Slider>
    </Div>
  );
});

const Div = styled.div`
  margin-top: 5px;
`;
