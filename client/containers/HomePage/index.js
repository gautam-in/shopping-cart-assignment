import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CategoryBanner from '../../components/CategoryBanner';
import SEO from '../../components/SEO';

const HomePage = ({ banners, categories }) => {
    return (
        <>
            <SEO />
            <Carousel ariaLabel='offers' showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                {banners.map((banner) => {
                    return (
                        <Image
                            src={banner.bannerImageUrl}
                            alt={banner.bannerImageAlt}
                            width={600}
                            height={150}
                            key={banner.id}
                        />
                    )
                })}
            </Carousel>
            {categories.map((category, index) => {
                return (
                    <CategoryBanner
                        key={category.id}
                        title={category.name}
                        desc={category.description}
                        image={category.imageUrl}
                        imageAlt={category.description}
                        categoryId={category.id}
                        reverse={(index + 1) % 2 === 0}
                    />
                )
            })}
        </>
    )
}

export default HomePage

HomePage.propTypes = {
    banners: PropTypes.arrayOf(PropTypes.shape({
        bannerImageUrl: PropTypes.string.isRequired,
        bannerImageAlt: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        order: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired)
}
