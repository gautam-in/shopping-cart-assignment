import React, { useEffect, useState } from "react";
import "./HeroCarousel.scss";
import useFetch from "../../utilities/helper/customHooks";
import LoaderCarousel from "../LoaderCarousel/LoaderCarousel";

function HeroCarousel() {
  const [data, loading = false, error] = useFetch(
    "http://localhost:5000/banners"
  );
  const [imageData, setImageData] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setImageData(data && data[0]);
  }, [data]);

  const arrowClickHandler = (acc) => {
    let newIndex =
      index + acc >= data.length
        ? 0
        : index + acc < 0
        ? data.length - 1
        : index + acc;
    setImageData(data && data[newIndex]);
    setIndex(newIndex);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      let newIndex = data && index + 1 < data.length ? index + 1 : 0;
      setImageData(data && data[newIndex]);
      setIndex(newIndex);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
    return;
  }, [data, index]);

  const dotClickHandler = (e) => {
    setIndex(e.target.value - 1);
    setImageData(data && data[e.target.value - 1]);
  };
  return (
    <section className="center-display">
      <div className="carousel">
        {loading ? (
          <LoaderCarousel error={false}/>
        ) : !error ? (
          <>
            <div className="arrow" onClick={() => arrowClickHandler(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ transform: "rotate(180deg)" }}
                className="arrow-icon"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
              </svg>
            </div>
            {imageData && (
              <img
                className="carousel-image"
                src={
                  imageData ? imageData.bannerImageUrl : data[0].bannerImageUrl
                }
                alt={
                  imageData ? imageData.bannerImageAlt : data[0].bannerImageAlt
                }
              />
            )}
            {data && data.length && imageData && (
              <div className="slick-dots">
                <ul className="slick-ul">
                  {data.map((el) => (
                    <li
                      className={
                        el.id === imageData.id
                          ? "slick-li-active slick-li "
                          : "slick-li"
                      }
                      key={el.id}
                      value={el.order}
                      onClick={(e) => dotClickHandler(e)}
                    ></li>
                  ))}
                </ul>
              </div>
            )}
            <div className="arrow" onClick={() => arrowClickHandler(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="arrow-icon"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </div>
          </>
        ) : (
          <LoaderCarousel error={true}/>
        )}
      </div>
    </section>
  );
}
export default React.memo(HeroCarousel);
