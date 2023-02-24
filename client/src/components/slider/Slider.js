import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "./slider-data";
import "./Slider.scss";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    fetch("http://localhost:8080/banners")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        setSliderData(data);
        setCurrentSlide(0);
      })
      .catch((error) => {
        setSliderData([]);
        setCurrentSlide(0);
      });
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <>
      {sliderData.length && (
        <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

          {sliderData.map((slide, index) => {
            const { bannerImageUrl, bannerImageAlt } = slide;
            return (
              <div
                key={index}
                className={index === currentSlide ? "slide current" : "slide"}
              >
                {index === currentSlide && (
                  <>
                    <img src={bannerImageUrl} alt="bannerImageAlt" />
                    <div className="content">
                      {/* <h2>{heading}</h2> */}
                      <p>{bannerImageAlt}</p>
                      <hr />
                      <a href="#products" className="--btn --btn-primary">
                        Shop Now
                      </a>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Slider;
