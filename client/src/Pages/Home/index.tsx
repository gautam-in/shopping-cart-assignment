import { Carousel } from "react-responsive-carousel"

import { CategoryBanner, CarouselIndicator, DataLoader } from "../../Components"

import { BannerType } from "./models"
import { CategoryType } from "../../models"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./styles.scss"

export const HomePage = () => {
  return (
    <div className="home">
      <section id="hero-banner" className="hero-banner">
        <div className="container">
          <DataLoader resource="banners">
            {(banners: BannerType[]) => (
              <Carousel
                className="home-carousel"
                ariaLabel="offers carousel"
                autoPlay={true}
                interval={3000}
                swipeable={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(clickHandler, hasPrev) =>
                  hasPrev && (
                    <CarouselIndicator
                      label="Prev"
                      direction="prev"
                      clickHandler={clickHandler}
                    />
                  )
                }
                renderArrowNext={(clickHandler, hasNext, labelNext) =>
                  hasNext && (
                    <CarouselIndicator
                      label="Next"
                      direction="next"
                      clickHandler={clickHandler}
                    />
                  )
                }
              >
                {banners
                  .filter((banner) => banner.isActive)
                  .sort((a, b) => a.order - b.order)
                  .map((banner) => (
                    <img
                      key={banner.id}
                      src={banner.bannerImageUrl}
                      alt={banner.bannerImageAlt}
                    />
                  ))}
              </Carousel>
            )}
          </DataLoader>
        </div>
      </section>

      <section id="categories" className="categories">
        <div className="container">
          <DataLoader resource="categories">
            {(categories: CategoryType[]) => (
              <>
                {categories
                  .filter((category) => category.enabled)
                  .sort((a, b) => a.order - b.order)
                  .map((category) => (
                    <CategoryBanner key={category.id} category={category} />
                  ))}
              </>
            )}
          </DataLoader>
        </div>
      </section>
    </div>
  )
}
