import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomepageBanner } from "../../redux/home/home.actions";
import { selectBanners } from "../../redux/home/home.selectors";

const Slider = () => {
  const banners = useSelector(selectBanners);
  const dispatch = useDispatch();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    dispatch(fetchHomepageBanner());
  }, [dispatch]);

  return (
    <section className="slider-container" aria-label="Banner">
      <Carousel
        swipeable
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {banners.map(({ bannerImageUrl, bannerImageAlt, id }) => (
          <img
            key={id}
            src={bannerImageUrl}
            alt={bannerImageAlt}
            className="slider-image"
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
