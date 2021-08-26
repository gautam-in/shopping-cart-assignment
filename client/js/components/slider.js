export const Slider = (banners) => {
  let slides = "";
  let slideDots = "";
  banners.forEach((banner, index) => {
    slides += `<img
        class="mySlides"
        src="${banner.bannerImageUrl}"
        alt="${banner.bannerImageAlt}"
    />`;
    slideDots += `<span id="slider-dot" data-id="${index}"
        class="w3-badge demo w3-border w3-transparent w3-hover-white">
    </span>`;
  });

  return `<div class="wrapper">
    <div id="slider" class="crousel-container box slide-container">
      ${slides}
      <div class="slide-btn" style="width: 100%">
        <div class="slider-left-btn">PREV</div>
        <div class="slider-right-btn">NEXT</div>
      </div>
      <div class="slide-dots">
        ${slideDots}
      </div>
    </div>
  </div>`;
};
