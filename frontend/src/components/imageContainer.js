import React, { useEffect, useState } from "react";

const ImageContainer = () => {
  let [banners, setBanners] = useState([]);
  let todaysBanners = [];
  useEffect(() => {
    const getBanners = async () => {
      const result = await fetch("http://localhost:3000/banners");
      const data = await result.json();
      console.log("result==", data);
      if (data && data.length > 0) {
        setBanners(data);
      }
    };
    getBanners();
  }, []);


  if (banners && banners.length > 0) {
    todaysBanners = banners.map((banner) => {
      if (banner.isActive) {
        return (
          <div key={banner.id} className="mySlides block">
            <img
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
              style={{ width: "100%" }}
            />
          </div>
        );
      }
    });
  }

  return (
    <div className="image-container">
      {todaysBanners}
      {/* <a className="prev" }>
        PREV
      </a>
      <a className="next" }>
        NEXT
      </a> */}
    </div>
  );
};

export default ImageContainer;
