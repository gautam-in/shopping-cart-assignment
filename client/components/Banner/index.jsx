import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Banner({ banners = [] }) {
    return (
        <Carousel>
            {banners?.map(({ bannerImageUrl, bannerImageAlt }, idx) => {
                return (
                    <Carousel.Item key={`banner_${idx}`}>
                        <img
                            className="d-block w-100 dafault-img"
                            src={bannerImageUrl}
                            alt={bannerImageAlt}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}