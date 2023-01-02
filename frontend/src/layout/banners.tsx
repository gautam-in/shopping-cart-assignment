import { useEffect, useState } from "react"
import { Banner, getBanners } from "../apis/banner"
import "./banner.scss"

export const Banners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([])
  const [current, setCurrent] = useState<number>(0)
  useEffect(() => {
    getBanners()
      .then((banners) => setBanners(banners))
      .catch(console.log)
  }, [])

  const banner = banners && banners[current]

  return (
    <>
      {banner && (
        <div className="banner-container" style={{ position: "relative" }}>
          <img
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            className="banner-img"
          />
          <button
            className="banner-navigation-buttons"
            style={{
              right: "30px",
            }}
            onClick={(_) =>
              setCurrent((current) => (current + 1) % banners.length)
            }
          >
            {">"}
          </button>
          <button
            className="banner-navigation-buttons"
            style={{
              left: "30px",
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
  )
}
