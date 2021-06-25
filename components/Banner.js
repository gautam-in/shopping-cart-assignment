import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBanners } from "../actions";
import { useEffect } from "react";

const SlickArrow = styled.button`
  &:before {
    color: black;
  }
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  nextArrow: <SlickArrow />,
  prevArrow: <SlickArrow />,
};

const renderBanner = (banners) => {
  return banners.map((banner) => {
    return (
      <img
        key={banner.id}
        src={banner.bannerImageUrl}
        alt={banner.bannerImageAlt}
      />
    );
  });
};

function Banner({ banners, fetchBanners }) {
  useEffect(() => {
    (async () => await fetchBanners())();
  }, []);

  if (banners) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Slider {...settings}>{renderBanner(banners)}</Slider>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    banners: state.categories.banners,
  };
};
export default connect(mapStateToProps, { fetchBanners })(Banner);
