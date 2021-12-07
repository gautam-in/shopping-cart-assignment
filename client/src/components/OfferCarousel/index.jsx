import Image from "components/HtmlElements/Image";
import React from "react";
import Carousel from "components/Carousel";

import "./OfferCarousel.scss";

export default function OfferCarousel({ banners }) {
  return (
    <div className="OfferCarousel">
      <Carousel>
        {banners.map((banner) => (
          <Image
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
          />
        ))}
      </Carousel>
    </div>
  );
}
