import { fetchBanners } from "../Redux/actions/thunk";
import { CategoryArticle } from "../styles/HomeStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCategory from "./HomeCategory";
import ErrorComponent from "./ErrorComponent";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banners.bannerList);

  useEffect(() => {
    if (bannerList.length === 0) {
      dispatch(fetchBanners());
    }
  }, [bannerList]);

  return (
    <>
      {bannerList.length === 0 ? (
        <ErrorComponent errorMessage="Unable to load banners." />
      ) : (
        <CategoryArticle>
          <Carousel
            preventMovementUntilSwipeScrollTolerance
            swipeable
            showStatus={false}
            showThumbs={false}
            emulateTouch
          >
            {bannerList
              ?.filter((banner) => banner.isActive)
              .map((banner) => (
                <div key={banner.id}>
                  <img
                    src={banner.bannerImageUrl}
                    alt={banner.bannerImageAlt}
                  />
                </div>
              ))}
          </Carousel>
        </CategoryArticle>
      )}
      <HomeCategory />
    </>
  );
};

export default HomeComponent;
