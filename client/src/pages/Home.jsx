import { useLoaderData } from "react-router-dom";
import { getBanners, getCategories } from "../api";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselIndicator from "../components/CarouselIndicator";
import "../assets/styles/pages/Home.scss";
import CardCategories from "../components/CardCategories";
import { sortAndFilter } from "../helpers";

const Home = () => {
  const [banners, categories] = useLoaderData();

  return (
    <div className="page-home">
      <div className="container">
        <Carousel
          className="drop-shadow"
          ariaLabel="offers slide"
          autoPlay
          swipeable
          infiniteLoop
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
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <CarouselIndicator
                label="Next"
                direction="next"
                clickHandler={clickHandler}
              />
            )
          }
        >
          {banners.map((banner) => (
            <div key={banner.id}>
              <img alt={banner.bannerImageAlt} src={banner.bannerImageUrl} />
            </div>
          ))}
        </Carousel>

        {sortAndFilter(categories).map((category) => (
          <CardCategories key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export const homePageLoader = async () => {
  return Promise.all([getBanners(), getCategories()]);
};

export default Home;
