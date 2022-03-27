import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bannerActions from "../../../redux/Banners/banners.action";
import Slider from "react-slick";
import "./Banners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = () => {
  let dispatch = useDispatch();
  let bannerObject = useSelector((state) => {
    return state.banners;
  });
  let { banners } = bannerObject;
  useEffect(() => {
    dispatch(bannerActions.getBanners());
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplayspeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScrool: 1,
    autoplay: true,
  };
  return (
    <React.Fragment>
      {/* <h2 className="text-center">Banners section</h2> */}
      {/* <small>{JSON.stringify(banners[0])}</small> */}
      {/* <div className="container mt-3">
        <img
          src={banners[0].bannerImageUrl}
          alt={banners[0].bannerImageAlt}
          width="100%"
        />
      </div> */}
      <section className="mt-3 container-lg">
        <Slider {...settings}>
          {banners.map((banner) => {
            return (
              <>
                <div key={banner.id}>
                  <img
                    src={banner.bannerImageUrl}
                    alt={banner.bannerImageAlt}
                    width="100%"
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </React.Fragment>
  );
};

export default Banners;
