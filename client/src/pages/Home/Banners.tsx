import React from 'react'
import Carousel from 'nuka-carousel';
import styles from "./home.module.scss"

export const Banners: React.FC<{ data: Banner[] }> = ({ data }) => {
  const makeSlide = () => {
    return (
      <Carousel autoplay wrapAround >
        {data?.map((banner: Banner) => {
          return (
            <img
              key={banner.id}
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          );
        })}
      </Carousel>
    )
  }
  return (
    <section>
      <div className={styles.carousel}>
        {makeSlide()}
      </div>
    </section>
  )
}
