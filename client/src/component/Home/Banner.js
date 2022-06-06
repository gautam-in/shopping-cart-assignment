import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const Banner = (props) => {
	return (
		<>
			<div className="slideshow__container">
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={{ clickable: true }}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					{props.banner.map((banner) => (
						<SwiperSlide key={banner.id}>
							<img
								src={banner.bannerImageUrl}
								alt={banner.bannerImageAlt}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Banner;
