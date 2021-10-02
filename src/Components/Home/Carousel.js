import React, {useState,useEffect} from 'react'

import images from "../../server/banners/index.get.json";

export default function Carousel(){
  let [current, setCurrent] = useState(1);
 
  const length = images.length;
 
  useEffect(() => {
   let timer = setTimeout(function(){
    if (current > length - 1) {
      current = 1;
    }else{
      current++;
    }
    setCurrent(current);
   },2000);

   return () => {
     clearTimeout(timer);
  } 
  },[current]);

    return(
      <section className="carousel">
      <div className="carousel-container">
        {images.map((image) => (
          <div
            key={image.id}
            className={
                image.order === current
                ? "carousel-container-slide active"
                : "carousel-container-slide"
            }
          >
            { (
              <img
                src={(image.bannerImageUrl)}
                alt={image.bannerImageAlt}
                className={"carousel-container-slide-image"}
              />
            )}
          </div>
        ))}

      </div>

      <div className="carousel-nav">
        {images.map((image) => (
          <button
            key={image.id}
            className={
              image.order === current
                ? "carousel-nav-dots dots-active"
                : "carousel-nav-dots"
            }
            aria-label={image.bannerImageAlt}
          ></button>
        ))}
      </div>
      </section>
    )
}