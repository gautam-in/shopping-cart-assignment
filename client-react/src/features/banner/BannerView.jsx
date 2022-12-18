import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel';
import { fetchBanners } from './BannerSlice'
import './Banner.scss'

export const BannerView = () => {
  const BASE_URL = "http://127.0.0.1:5500";

  const banner = useSelector(state => state.banner)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBanners())
  }, [])
  return (
    <section className='banner-wrapper'>
      {banner.loading && <div>Loading...</div>}
      {!banner.loading && banner.error ? <div>Error: {banner.error}</div> : null}
      {!banner.loading && banner.banners.length ? (

        <Carousel>
          {banner.banners.map((banner) => <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100"
              src={BASE_URL + banner.bannerImageUrl}
              alt={BASE_URL + banner.bannerImageAlt}
            />
          </Carousel.Item>
          )}
        </Carousel>

      ) : null}
    </section>
  )
}
