import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerContainer, BannerImage } from "./styles";

const Banners = ({ banners }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<BannerContainer>
			<Carousel
				swipeable
				draggable={false}
				showDots={true}
				responsive={responsive}
				infinite={false}
				keyBoardControl={true}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style"
			>
				{banners.map(({ bannerImageUrl, bannerImageAlt, id }) => (
					<BannerImage key={id} src={bannerImageUrl} alt={bannerImageAlt} />
				))}
			</Carousel>
		</BannerContainer>
	);
};

export default Banners;
