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
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
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
    <div>
      <div class="slideShowContainer">
        {banners.map((banner) => {
          return (
            <div class="mySlides fade" key={banner.id}>
              <img
                src={banner.bannerImageUrl}
                style={{ width: "100%" }}
                alt={banner.bannerImageAlt}
              />
            </div>
          );
        })}
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        {banners.map((banner) => {
          return <span class="dot" key={banner.id}></span>;
        })}
      </div>
    </div>
  );
}
