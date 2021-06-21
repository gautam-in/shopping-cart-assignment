import React, { useState } from 'react';
import '../Styles/carousel.css';

export default function ({ banners }) {
  let [banner, setBanner] = useState(banners[0]);

  return (
    <div className="banners">
      <div className="carousel">
        <div className="prev">Prev</div>
        <img
          className="banner-image"
          src={banner.bannerImageUrl}
          alt={banner.bannerImageAlt}
        />
        <div className="banner-dots">
          {banners.map((_) => (
            <div
              key={_.id}
              className={_.id == banner.id ? 'banner-dot active' : 'banner-dot'}
              onClick={() => {
                setBanner(_);
              }}
            />
          ))}
        </div>
        <div className="next">Next</div>
      </div>
    </div>
  );
}
