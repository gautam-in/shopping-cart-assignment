import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import { fetchBanners } from './BannerSlice';

import './Banner.scss'

export const BannerView = () => {
  const banner = useSelector(state => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanners())
  }, [])
  
  return (
    <div className='banner-wrapper'>
      {banner.loading && <div>Loading...</div>}
      {!banner.loading && banner.error ? <div>Error: {banner.error}</div> : null}
      {!banner.loading && banner.banners.length ? (

        <>
          <Carousel>
            {banner.banners.map((banner) => <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={process.env.REACT_APP_BASE_URL + banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            </Carousel.Item>
            )}
          </Carousel>
          <div className='seperator-img'></div>
        </>
      ) : null}
    </div>
  )
}
