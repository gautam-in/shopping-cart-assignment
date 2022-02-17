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
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				// autoPlaySpeed={5000}
				keyBoardControl={true}
				// customTransition="all .5"
				// transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				// itemClass="carousel-item-padding-40-px"
			>
				{banners.map(({ bannerImageUrl, bannerImageAlt, id }) => (
					<div key={id}>
						<BannerImage src={bannerImageUrl} alt={bannerImageAlt} />
					</div>
				))}
			</Carousel>
		</BannerContainer>
	);
};

export default Banners;
