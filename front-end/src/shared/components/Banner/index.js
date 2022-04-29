import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";


const Banner = ({ banners }) => {

  return (
    <>
      <div className="banner">
        <div className="carousel-container">
          <Carousel
            infiniteLoop
            autoPlay
            useKeyboardArrows
            centerMode
            showThumbs={false}
          >
            {!banners.length ? (
              <div>Loading...</div>
            ) : (
              banners.map((item) => (
                <div key={item.id}>
                  <img  src={require("../../" + item.bannerImageUrl)} alt={item.bannerImageAlt} />
                </div>
              ))
            )}
          </Carousel>
        </div>
    </div>
    </>
  );
};

export default Banner;
