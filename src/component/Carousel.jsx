import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/carousel.scss";

const Carousels = () => {
  const [banners, setBanners] = useState([]);

  const getBannerList = async () => {
    const res = await axios.get("http://localhost:8000/banners");
    setBanners(res.data);
  };

  useEffect(() => {
    getBannerList();
  }, []);

  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop style={{ width: "60%" }}>
      {banners.map(({ id, bannerImageUrl, bannerImageAlt }) => (
        <div key={id}>
          <img
            src={require(`../../src${bannerImageUrl}`)}
            alt={`${bannerImageAlt}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Carousels;
