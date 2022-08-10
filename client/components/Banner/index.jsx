import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NextImage from 'next/image';

export default function Banner({ banners = [] }) {
    return (
        <Carousel controls={true} indicators={false} variant="dark">
            {banners?.map(({ bannerImageUrl, bannerImageAlt }, idx) => {
                return (
                    <Carousel.Item key={`banner_${idx}`}>
                        <NextImage className="d-block w-100" src={bannerImageUrl} alt={bannerImageAlt} width={1296} height={300} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}