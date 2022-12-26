import { useEffect, useState } from "react";
import { Banner, getBanners } from "../apis/banner";

export const Banners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    getBanners()
      .then((banners) => setBanners(banners))
      .catch(console.log);
  }, []);

  const banner = banners && banners[current];

  return (
    <>
      {banner && (
        <div className="banner-container" style={{ position: "relative" }}>
          <img
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            style={{
              width: "100%",
              height: "400px",
              border: "1px solid rgba(170, 170, 170, 0.5)",
            }}
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              right: "30px",
              backgroundColor: "rgba(119, 119, 119, .8)",
              padding: "5px 25px",
              cursor: "pointer",
              borderColor: "transparent",
              fontSize: "20px",
              color: "black",
            }}
            onClick={(_) =>
              setCurrent((current) => (current + 1) % banners.length)
            }
          >
            {">"}
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "30px",
              backgroundColor: "rgba(119, 119, 119, .8)",
              padding: "5px 25px",
              cursor: "pointer",
              borderColor: "transparent",
              fontSize: "20px",
              color: "black",
            }}
            onClick={(_) =>
              setCurrent((current) => banners.length - current - 1)
            }
          >
            {"<"}
          </button>
        </div>
      )}
    </>
  );
};
