import React from "react";
import "./Carousel.scss";

export default function Carousel(props) {
  const { banners } = props;
  let slideIndex = 0;
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length > 0 && dots.length > 0) {
      for (i of slides) {
        i.style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i of dots) {
        i.className = i.className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000);
    }
  }
  React.useEffect(() => {
    showSlides();
  }, []);
  return (
    <section data-test="component-carousel">
      <section className="slideShowContainer">
        {banners.map((banner) => {
          return (
            <figure className="mySlides fade" key={banner.id}>
              <img
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
                data-test="carousel-image"
                width="100%"
              />
            </figure>
          );
        })}
      </section>
      <br />

      <section className="dotContainer">
        {banners.map((banner) => {
          return <span className="dot" key={banner.id}></span>;
        })}
      </section>
    </section>
  );
}
