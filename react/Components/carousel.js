import React, { useState } from 'react';
import '../Styles/carousel.css';

export default function ({ banners }) {
  let [banner, setBanner] = useState(0);
  let changePrev = () => {
    if (banner == 0) return;
    setBanner(banner - 1);
  };
  let changeNext = () => {
    if (banner + 1 == banners.length) return;
    setBanner(banner + 1);
  };
  return (
    <section className="banners">
      <button className="prev" onClick={changePrev}>
        Prev
      </button>
      <img
        className="banner-image"
        src={banners[banner].bannerImageUrl}
        alt={banners[banner].bannerImageAlt}
      />
      <div className="banner-dots">
        {banners.map((_, i) => (
          <button
            key={_.id}
            className={
              _.id == banners[banner].id ? 'banner-dot active' : 'banner-dot'
            }
            onClick={() => {
              setBanner(i);
            }}
          />
        ))}
      </div>
      <button className="next" onClick={changeNext}>
        Next
      </button>
    </section>
  );
}
