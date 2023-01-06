import { lazy, ReactNode, useEffect, useState } from "react"
import { Banner, getBanners } from "../../apis/banner"
import "./index.scss"

const LazyBannerImage = lazy(() => import("./banner-image"))

const Banners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([])
  const [current, setCurrent] = useState<number>(0)
  const [Component, setComponent] = useState<ReactNode | null>(null)

  useEffect(() => {
    getBanners()
      .then((banners) => setBanners(banners))
      .catch(console.log)
  }, [])

  const banner = banners && banners[current]

  useEffect(() => {
    if (banner) {
      setComponent(
        <LazyBannerImage
          bannerImageUrl={banner.bannerImageUrl}
          bannerImageAlt={banner.bannerImageAlt}
        />,
      )
    }
  }, [banner])

  return (
    <>
      {banner && (
        <div className="banner-container" style={{ position: "relative" }}>
          {Component}
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
        </div>
      )}
    </>
  )
}

export default Banners
