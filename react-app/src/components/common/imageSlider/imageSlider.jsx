import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider({ banners, height, width }) {
  const images = [];
  banners.forEach((element) => {
    images.push({ url: element.bannerImageUrl, alt: element.bannerImageAlt });
  });

  return (
    <div>
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  );
}

export default ImageSlider;
