import { useQuery } from "react-query"
import { Carousel } from "react-responsive-carousel"

import {
  Button,
  CategoryBanner,
  Loader,
  CarouselIndicator,
} from "../../Components"

import { BannerType } from "./models"
import { CategoryType } from "../../models"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./styles.scss"

export const HomePage = () => {
  const {
    isLoading: bannersLoading,
    error: bannersError,
    data: banners,
  } = useQuery<BannerType[]>("banners", async () => {
    const response = await fetch("http://localhost:5000/banners")
    const data = await response.json()
    return data
  })

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery<CategoryType[]>("categories", async () => {
    const response = await fetch("http://localhost:5000/categories")
    const data = await response.json()
    return data
  })

  return (
    <div className="home">
      <section id="hero-banner" className="hero-banner">
        <div className="container">
          {bannersLoading && <Loader />}

          <>
            {bannersError && (
              <h5>Unable to load product offers. Please try again...</h5>
            )}
          </>

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
            {banners &&
              banners
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
        </div>
      </section>

      <section id="categories" className="categories">
        <div className="container">
          {categoriesLoading && <Loader />}

          <>
            {categoriesError && (
              <h5>Unable to load product categories. Please try again...</h5>
            )}
          </>

          {categories &&
            categories
              .filter((category) => category.enabled)
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <CategoryBanner key={category.id} category={category} />
              ))}
        </div>
      </section>
    </div>
  )
}
